import { AbstractActor } from "js-actor"
import { IEntity } from "@entities/IEntity";
import { info, dialogue } from "utils/console";
import { World } from "world";
import { DescribeMenus } from "@systems/console/messages/DescribeMenus";
import { Welcome } from "@systems/welcome/messages/Welcome";
import { GameStart } from "@systems/welcome/messages/GameStart";
import { DescribeStage } from "@systems/console/messages/DescribeStage";
import { ICharacterEntity } from "@entities/characters/ICharacter";
import { IStageEntity } from "@entities/stages/IStage";
import { DescribeDialogue } from "@systems/console/messages/DescribeDialogue";
import { DescribeInfo } from "@systems/console/messages/DescribeInfo";

export class ConsoleSystem extends AbstractActor {
  constructor(private world: World) {
    super()
  }
  public createReceive() {
    return this.receiveBuilder()
      .match(Welcome, welcome => {
        console.info("欢迎来到仙剑奇侠传 beta. \n")
      })
      .match(GameStart, () => {
        console.info("游玩愉快. \n")
      })
      .match(DescribeMenus, ({ menus }) => {
        const str = menus.map((menu, index) => ++index + "、" + menu.nameComponent.value).join("\n")
        info(str)
      })
      .match(DescribeStage, ({ stage }) => {
        const str = `地点：${stage.nameComponent.value}\n描述：${stage.descComponent.value}\n这有：${getItemName(stage.stageComponent.items).join(",")}`
        info(str)
      })
      .match(DescribeDialogue, ({ dialogue }) => {
        info(dialogue)
      })
      .match(DescribeInfo, ({ info: str }) => {
        info(str)
      })
      .build()
  }
}

function getItemName(items: IEntity[]) {
  return items.map((item, index) => `${index + 1
    }.${item.nameComponent.value}`)
}