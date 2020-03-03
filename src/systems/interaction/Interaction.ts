import { AbstractActor, ActorRef } from "js-actor"
import { World } from "world";
import { With } from "@systems/interaction/messages/with";
import { InputSystem } from "@systems/Input/Input";
import { ConsoleSystem } from "@systems/console/Console";
import { WaitingInput } from "@systems/input/messages/WaitingInput";
import { DialogueMenuEntity } from "@entities/menus/interaction/Dialogue";
import { BackMenuEntity } from "@entities/menus/interaction/Back";
import { isCharacter, isStage } from "utils/is";
import { DescribeMenus } from "@systems/console/messages/DescribeMenus";
import { IntoMenuEntity } from "@entities/menus/interaction/Into";
import { AttackMenuEntity } from "@entities/menus/interaction/Attack";

export class InteractionSystem extends AbstractActor {
  constructor(
    private world: World,
    private inputRef: ActorRef<InputSystem>,
    private consoleRef: ActorRef<ConsoleSystem>
  ) {
    super()
  }
  public createReceive() {
    return this.receiveBuilder()
      .answer(With, resolve => async ({ entity }) => {
        const menus = []
        if (isCharacter(entity)) {
          if (entity.dialogueComponent) {
            menus.push(new DialogueMenuEntity)
          }
          if (entity.enemyComponent) {
            menus.push(new AttackMenuEntity)
          }
          menus.push(new BackMenuEntity)
        } else if (isStage(entity)) {
          menus.push(new IntoMenuEntity)
          menus.push(new BackMenuEntity)
        }
        this.consoleRef.tell(new DescribeMenus(menus))
        const index = await this.inputRef.ask<number>(new WaitingInput)
        const selectedMenu = menus[index]
        resolve(selectedMenu)
      })
      .build()
  }
}