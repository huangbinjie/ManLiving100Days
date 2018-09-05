import { AbstractActor, ActorRef } from "js-actor"
import { Welcome } from "./messages/Welcome";
import { GameStartMenuEntity } from "@entities/menus/GameStart";
import { GameStart } from "./messages/GameStart";
import { World } from "world";
import { DescribeMenus } from "@systems/console/messages/DescribeMenus";
import { InputSystem } from "@systems/Input/Input";
import { WaitingInput } from "@systems/input/messages/WaitingInput";
import { ConsoleSystem } from "@systems/console/Console";

export class WelcomeSystem extends AbstractActor {
  constructor(
    private world: World,
    private inputRef: ActorRef<InputSystem>,
    private consoleRef: ActorRef<ConsoleSystem>
  ) {
    super()
  }
  protected createReceive() {
    return this.receiveBuilder()
      .match(Welcome, async () => {
        const menus = [new GameStartMenuEntity()]
        this.consoleRef.tell(new DescribeMenus(menus))
        const index = await this.inputRef.ask(new WaitingInput())
        if (menus[index].nameComponent.value === "开始游戏") {
          this.world.broadcast(new GameStart())
        }
      })
      .build()
  }
}