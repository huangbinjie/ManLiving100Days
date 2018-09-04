import { AbstractActor, ActorRef } from "js-actor"
import { Welcome } from "./messages/Welcome";
import { GameStartMenuEntity } from "@entities/menus/GameStart";
import { GameStart } from "./messages/GameStart";
import { World } from "world";
import { DescribeMenus } from "@systems/console/messages/DescribeMenus";
import { InputSystem } from "@systems/Input/Input";
import { WaitingInput } from "@systems/input/messages/WaitingInput";

export class WelcomeSystem extends AbstractActor {
  private inputRef!: ActorRef<InputSystem>
  constructor(private world: World) {
    super()
  }
  public preStart() {
    this.inputRef = this.context.system.get(InputSystem)!
  }
  protected createReceive() {
    return this.receiveBuilder()
      .match(Welcome, () => {
        const menus = [new GameStartMenuEntity()]
        this.world.broadcast(new DescribeMenus(menus))
        this.inputRef.ask(new WaitingInput(menus)).then((index: number) => {
          if (menus[index].nameComponent.value === "开始游戏") {
            this.world.broadcast(new GameStart())
          }
        })
      })
      .build()
  }
}