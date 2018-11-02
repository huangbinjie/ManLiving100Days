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
import { DialogueMenuEntity } from "@entities/menus/Dialogue";
import { AttackMenuEntity } from "@entities/menus/Attack";
import { IntoMenuEntity } from "@entities/menus/Into";
import { BackMenuEntity } from "@entities/menus/Back";
import { DialogueSystem } from "systems/dialogue/Dialogue";
import { StartDialogue } from "systems/dialogue/messages/StartDialogue";
import { isCharacter } from "utils/is";

export class StageSystem extends AbstractActor {
  constructor(
    private world: World,
    private inputRef: ActorRef<InputSystem>,
    private consoleRef: ActorRef<ConsoleSystem>,
    private dialogueRef: ActorRef<DialogueSystem>,
    private interactionRef: ActorRef<InteractionSystem>
  ) {
    super()
  }
  protected createReceive() {
    return this.receiveBuilder()
      .match(GameStart, async () => {
        const stage0 = new Stage0Entity()
        this.world.broadcast(new ChangeStage(stage0))
      })
      .match(ChangeStage, async ({ stage }) => {
        this.consoleRef.tell(new DescribeStage(stage))
        const index = await this.inputRef.ask(new WaitingInput())
        const selected = stage.stageComponent.items[index]
        const selectedMenu = await this.interactionRef.ask<IMenuEntity>(new With(selected))
        switch (true) {
          case selectedMenu instanceof DialogueMenuEntity: {
            if (isCharacter(selected)) {
              this.dialogueRef.tell(new StartDialogue(selected.dialogueComponent!.dialogues))
            }
            break;
          }
          case selectedMenu instanceof AttackMenuEntity:
          case selectedMenu instanceof IntoMenuEntity:
          case selectedMenu instanceof BackMenuEntity:
            this.getSelf().tell(new ChangeStage(stage))
        }
      })
      .build()
  }
}
