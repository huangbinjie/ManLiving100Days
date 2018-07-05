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

export class StageSystem extends AbstractActor {
  protected createReceive() {
    return this.receiveBuilder()
      .match(GameStart, gameStart => {
        const stage0 = new Stage0Entity()
        describeStage(stage0)
        this.tellLogger(gameStart)
        this.context.system.tell("Input", new WaitingSelectStageItem(stage0))
      })
      .match(SelectStageItemComplete, inputComplete => {
        const item = inputComplete.stage.stageComponent.items[inputComplete.index]
        const interactiveMenus: Array<"进入" | "战斗" | "对话" | "打开" | "返回"> = []
        if ((item as IStageEntity).stageComponent) {
          interactiveMenus.push("进入")
        }
        if ((item as ICharacterEntity).enemyComponent) {
          interactiveMenus.push("战斗")
        }
        if ((item as ICharacterEntity).dialogueComponent) {
          interactiveMenus.push("对话")
        }
        if ((item as IChestEntity).chestComponent) {
          interactiveMenus.push("打开")
        }
        interactiveMenus.push("返回")
        console.info(describeInteractiveMenus(interactiveMenus))
        this.context.system.tell("Input", new WaitingInteractWithStage(inputComplete.stage, item, interactiveMenus))
      })
      .match(InteractWithStageComplete, response => {
        switch (response.value) {
          case "进入":
            this.getSelf().tell(new ChangeStage(response.item as IStageEntity))
            break;
          case "返回":
            this.getSelf().tell(new ChangeStage(response.stage))
        }
      })
      .build()
  }

  private tellLogger(message: object) {
    this.context.system.tell("Logger", message)
  }
}

function describeStage(stage: IStageEntity) {
  console.info(`
  地点：${stage.nameComponent.value}\n
  描述：${stage.descComponent.value}\n
  这有：${getItemName(stage.stageComponent.items).join("  ")}
`)
}

function describeInteractiveMenus(menus: string[]) {
  return menus.map((menu, index) => `${index + 1}.${menu}`).join(", ")
}

function getItemName(items: IEntity[]) {
  return items.map((item, index) => `${index + 1}.${item.nameComponent.value}`)
}