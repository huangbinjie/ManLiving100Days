import { AbstractActor } from "js-actor"
import { IEntity } from "@entities/IEntity";
import { info, dialogue } from "utils/console";
import { World } from "world";
import { DescribeMenus } from "@components/console/messages/DescribeMenus";
import { Welcome } from "@components/Welcome/messages/Welcome";
import { GameStart } from "@components/welcome/messages/GameStart";
import { ChangeStage } from "@components/Stage/messages/ChangeStage";
import { OpenChest } from "@components/chest/messages/OpenChest";
import { DescribeStage } from "@components/console/messages/DescribeStage";
import { DescribeDialogue } from "@components/console/messages/DescribeDialogue";
import { DescribeAttack } from "@components/attack/messages/DescribeAttack";

export class ConsoleSystem extends AbstractActor {
  constructor(private world: World) {
    super()
  }
  protected createReceive() {
    return this.receiveBuilder()
      .match(Welcome, welcome => {
        console.info("欢迎来到仙剑奇侠传 beta. \n")
      })
      .match(GameStart, () => {
        console.info("游玩愉快. \n")
      })
      .match(ChangeStage, changeStage => {
        console.info("你来到了" + changeStage.nextStage.nameComponent.value + "\n")
      })
      .match(OpenChest, openChest => {
        console.info("你打开了一个" + openChest.chest.nameComponent.value + "\n")
      })
      .match(DescribeMenus, ({ menus }) => {
        console.clear()
        const str = menus.map((menu, index) => ++index + "、" + menu.nameComponent.value).join("\n")
        info(str)
      })
      .match(DescribeStage, ({ stage }) => {
        console.clear()
        const str = `地点：${stage.nameComponent.value}\n描述：${stage.descComponent.value}\n这有：${getItemName(stage.stageComponent.items).join(",")}`
        info(str)
      })
      .match(DescribeDialogue, ({ dialogue: str }) => {
        dialogue(str)
      })
      .match(DescribeAttack, ({ str }) => {
        console.log(str)
      })
      .build()
  }
}

function getItemName(items: IEntity[]) {
  return items.map((item, index) => `${index + 1
    }.${item.nameComponent.value}`)
}