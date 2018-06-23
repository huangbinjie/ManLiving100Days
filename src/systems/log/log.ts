import { AbstractActor } from "js-actor"
import { Welcome } from "@components/Welcome/messages/Welcome";
import { GameStart } from "@components/Menu/messages/GameStart";
import { ChangeStage } from "@components/Stage/messages/ChangeStage";
import { OpenChest } from "@components/chest/messages/OpenChest";
import { open } from "inspector";

export class LogSystem extends AbstractActor {

  public createReceive() {
    return this.receiveBuilder()
      .match(Welcome, welcome => {
        console.info("欢迎来到仙剑奇侠传 beta.")
      })
      .match(GameStart, () => {
        console.info("游玩愉快.")
      })
      .match(ChangeStage, changeStage => {
        console.info("你来到了" + changeStage.stage.nameComponent.value)
      })
      .match(OpenChest, openChest => {
        console.info("你打开了一个" + openChest.chest.nameComponent.value)
      })
      .build()
  }
}