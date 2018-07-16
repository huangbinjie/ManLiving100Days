import { AbstractActor } from "js-actor"
import { Welcome } from "./messages/Welcome";
import { GameStartMenuEntity } from "@entities/menus/GameStart";
import { WaitingWelcomeInput } from "./messages/WaitingInput";
import { WelcomeInputComplete } from "./messages/InputComplete";
import { GameStart } from "./messages/GameStart";
import { World } from "world";
import { DescribeMenus } from "@components/console/messages/DescribeMenus";

export class WelcomeSystem extends AbstractActor {
  constructor(private world: World) {
    super()
  }
  protected createReceive() {
    return this.receiveBuilder()
      .match(Welcome, welcome => {
        const menus = [new GameStartMenuEntity()]
        this.world.broadcast(new DescribeMenus(menus))
        this.world.broadcast(new WaitingWelcomeInput(menus))
      })
      .match(WelcomeInputComplete, inputComplete => {
        // 欢迎页只有菜单，直接 cast 了
        if (inputComplete.item.nameComponent.value === "开始游戏") {
          this.world.broadcast(new GameStart())
        }
      })
      .build()
  }
}