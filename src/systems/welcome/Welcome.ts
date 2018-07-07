import { AbstractActor } from "js-actor"
import { IEntity } from "entities/IEntity";
import { ChangeStage } from "@components/Stage/messages/ChangeStage";
import { Welcome } from "@components/Welcome/messages/Welcome";
import { GameStartMenuEntity } from "@entities/menus/GameStart";
import { Stage1Entity } from "@entities/stages/stage1";
import { SelectMenu } from "@components/menu/messages/SelectMenu";
import { IMenuEntity } from "@entities/menus/IMenu";
import { WaitingWelcomeInput } from "@components/welcome/messages/WaitingInput";
import { WelcomeInputComplete } from "@components/welcome/messages/InputComplete";
import { menu } from "utils/console";

export class WelcomeSystem extends AbstractActor {
  protected createReceive() {
    return this.receiveBuilder()
      .match(Welcome, welcome => {
        const menus = [new GameStartMenuEntity()]
        menu(menus)
        this.context.system.tell("InputSystem", new WaitingWelcomeInput(menus))
      })
      .match(WelcomeInputComplete, inputComplete => {
        // 欢迎页只有菜单，直接 cast 了
        const item = inputComplete.item as IMenuEntity
        this.context.system.tell("*", item.behaviorComponent.value)
      })
      .build()
  }
}