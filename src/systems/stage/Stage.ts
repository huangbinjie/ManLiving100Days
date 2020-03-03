import { AbstractActor, ActorRef } from "js-actor"
import { World } from "world";
import { GameStart } from "@systems/welcome/messages/GameStart";
import { Stage0Entity } from "@entities/stages/stage0";
import { InputSystem } from "@systems/Input/Input";
import { ConsoleSystem } from "@systems/console/Console";
import { DescribeStage } from "@systems/console/messages/DescribeStage";
import { WaitingInput } from "@systems/input/messages/WaitingInput";
import { ICharacterEntity } from "@entities/characters/ICharacter";
import { IStageEntity } from "@entities/stages/IStage";
import { ChangeStage } from "@systems/stage/messages/ChangeStage";
import { InteractionSystem } from "@systems/interaction/Interaction";
import { With } from "@systems/interaction/messages/with";
import { IMenuEntity } from "@entities/menus/IMenu";
import { DialogueMenuEntity } from "@entities/menus/interaction/Dialogue";
import { AttackMenuEntity } from "@entities/menus/interaction/Attack";
import { IntoMenuEntity } from "@entities/menus/interaction/Into";
import { BackMenuEntity } from "@entities/menus/interaction/Back";
import { DialogueSystem } from "@systems/dialogue/Dialogue";
import { DescribeDialogue } from "@systems/console/messages/DescribeDialogue";
import { WaitingEnter } from "@systems/input/messages/WaitingEnter";
import { BattleSystem } from "@systems/attack/Battle";
import { BeginBattle } from "@systems/attack/messages/BeginBattle";

export class StageSystem extends AbstractActor {
  constructor(
    private world: World,
    private inputRef: ActorRef<InputSystem>,
    private consoleRef: ActorRef<ConsoleSystem>,
    private dialogueRef: ActorRef<DialogueSystem>,
    private interactionRef: ActorRef<InteractionSystem>,
    private battleRef: ActorRef<BattleSystem>
  ) {
    super()
  }
  protected createReceive() {
    return this.receiveBuilder()
      .match(GameStart, async () => {
        const stage0 = new Stage0Entity()
        this.getSelf().tell(new ChangeStage(stage0))
      })
      .match(ChangeStage, async ({ stage }) => {
        this.consoleRef.tell(new DescribeStage(stage))
        const index = await this.inputRef.ask(new WaitingInput())
        const selected = stage.stageComponent.items[index]
        const selectedMenu = await this.interactionRef.ask<IMenuEntity>(new With(selected))
        switch (true) {
          // 对话
          case selectedMenu instanceof DialogueMenuEntity:
            const dialogues = (selected as ICharacterEntity).dialogueComponent!.dialogues
            for (const dialogue of dialogues) {
              this.consoleRef.tell(new DescribeDialogue(dialogue))
              await this.inputRef.ask(new WaitingEnter())
            }
            this.getSelf().tell(new ChangeStage(stage))
            break
          case selectedMenu instanceof AttackMenuEntity:
            this.battleRef.tell(new BeginBattle)
            break
          case selectedMenu instanceof IntoMenuEntity:
            this.getSelf().tell(new ChangeStage(selected as IStageEntity))
            break
          // 返回
          case selectedMenu instanceof BackMenuEntity:
            this.getSelf().tell(new ChangeStage(stage))
            break
        }
      })
      .build()
  }
}
