import { AbstractActor } from "js-actor"
import { IEntity } from "entities/IEntity";
import { ChangeStage } from "@components/Stage/messages/ChangeStage";
import { Stage1Entity } from "@entities/stages/stage1";
import { WaitingSelectStageItem } from "@components/input/messages/WaitingSelectStageItem";
import { GameStart } from "@components/welcome/messages/GameStart";
import { IStageEntity } from "@entities/stages/IStage";
import { SelectStage } from "@components/stage/messages/SelectStage";
import { SelectCharacter } from "@components/stage/messages/SelectCharacter";
import { SelectChest } from "@components/stage/messages/SelectChest";
import { ICharacterEntity } from "@entities/characters/ICharacter";
import { WaitingInteractWithStage } from "@components/input/messages/WaitingInteractWithStage";
import { SelectStageItemComplete } from "@components/input/messages/SelectStageItemComplete";
import { InteractWithStageComplete } from "@components/input/messages/InteractWithStageComplete";
import { Stage0Entity } from "@entities/stages/stage0";
import { IChestEntity } from "@entities/chests";
import { StartDialogue } from "@components/dialogue/messages/StartDialogue";
import { World } from "world";
import { stage, menu } from "utils/console";
import { GoIntoMenuEntity } from "@entities/menus/GoInto";
import { IMenuEntity } from "@entities/menus/IMenu";
import { BattleMenuEntity } from "@entities/menus/Battle";
import { DialogueMenuEntity } from "@entities/menus/Dialogue";
import { OpenMenuEntity } from "@entities/menus/Open";
import { BackMenuEntity } from "@entities/menus/Back";

export class StageSystem extends AbstractActor {
  constructor(private world: World) {
    super()
  }
  protected createReceive() {
    return this.receiveBuilder()
      .match(GameStart, gameStart => {
        console.clear()
        const stage0 = new Stage0Entity()
        stage(stage0)
        this.tellLogger(gameStart)
        this.context.system.tell("InputSystem", new WaitingSelectStageItem(stage0))
      })
      .match(ChangeStage, changeStage => {
        const nextStage = changeStage.stage
        stage(nextStage)
        this.tellLogger(changeStage)
        this.context.system.tell("InputSystem", new WaitingSelectStageItem(nextStage))
      })
      .match(SelectStageItemComplete, inputComplete => {
        console.clear()
        const item = inputComplete.stage.stageComponent.items[inputComplete.index]
        const interactiveMenus: IMenuEntity[] = []
        if ((item as IStageEntity).stageComponent) {
          interactiveMenus.push(new GoIntoMenuEntity())
        }
        if ((item as ICharacterEntity).enemyComponent) {
          interactiveMenus.push(new BattleMenuEntity)
        }
        if ((item as ICharacterEntity).dialogueComponent) {
          interactiveMenus.push(new DialogueMenuEntity())
        }
        if ((item as IChestEntity).chestComponent) {
          interactiveMenus.push(new OpenMenuEntity())
        }
        interactiveMenus.push(new BackMenuEntity())
        menu(interactiveMenus)
        this.context.system.tell("InputSystem", new WaitingInteractWithStage(inputComplete.stage, item, interactiveMenus))
      })
      .match(InteractWithStageComplete, response => {
        console.clear()
        switch (response.menu.nameComponent.value) {
          case "进入":
            this.getSelf().tell(new ChangeStage(response.item as IStageEntity))
            break;
          case "对话":
            this.context.system.tell("DialogueSystem", new StartDialogue((response.item as ICharacterEntity).dialogueComponent!.dialogues))
            break;
          case "返回":
            this.getSelf().tell(new ChangeStage(response.stage))
            break;
        }
      })
      .build()
  }

  private tellLogger(message: object) {
    this.context.system.tell("LogSystem", message)
  }
}
