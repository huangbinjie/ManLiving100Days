import { AbstractActor } from "js-actor"
import { IEntity } from "entities/IEntity";
import { ChangeStage } from "@components/Stage/messages/ChangeStage";
import { Welcome } from "@components/Welcome/messages/Welcome";
import { GameStartMenuEntity } from "@entities/menus/GameStart/GameStart";
import { Stage1Entity } from "@entities/stages/stage1";
import { SelectMenu } from "@components/menu/messages/SelectMenu";
import { AbstractMenuEntity } from "@entities/menus/AbstractMenu";
import { InputComplete } from "@components/input/messages/InputComplete";
import { WaitingInput } from "@components/input/messages/WaitingInput";

export class WelcomeSystem extends AbstractActor {
  protected createReceive() {
    return this.receiveBuilder()
      .match(Welcome, welcome => {
        this.tellLogger(welcome)
        const menus = [new GameStartMenuEntity()]
        console.log(`
          请选择 \n
          1、${menus[0].nameComponent.value}
        `)

        this.context.system.tell("InputSystem", new WaitingInput(menus))
      })
      .match(InputComplete, inputComplete => {
        // 欢迎页只有菜单，直接 cast 了
        const item = inputComplete.item as AbstractMenuEntity
        this.context.system.tell("*", new item.behaviorComponent.value)
      })
      .build()
  }

  private tellLogger(message: object) {
    this.context.system.tell("Logger", message)
  }
}