import { AbstractActor } from "js-actor"
import { Welcome } from "@components/Welcome/messages/Welcome";
import { GameStart } from "@components/Menu/messages/GameStart";
import { ChangeStage } from "@components/Stage/messages/ChangeStage";

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
      .build()
  }
}