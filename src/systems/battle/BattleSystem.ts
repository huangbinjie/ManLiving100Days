import { AbstractActor, ActorRef } from "js-actor";
import { BeginBattle } from "./messages/BeginBattle";
import { World } from "world";
import { InputSystem } from "systems/Input/Input";
import { ConsoleSystem } from "systems/console/Console";
import { DialogueSystem } from "systems/dialogue/Dialogue";
import { InteractionSystem } from "systems/interaction/Interaction";

export class BattleSystem extends AbstractActor {
  constructor(
    private world: World,
    private inputRef: ActorRef<InputSystem>,
    private consoleRef: ActorRef<ConsoleSystem>,
    private dialogueRef: ActorRef<DialogueSystem>,
    private interactionRef: ActorRef<InteractionSystem>
  ) {
    super()
  }
  public createReceive() {
    return this.receiveBuilder()
      .match(BeginBattle, () => {
        
      })
      .answer(String, resolve => () => {
        resolve()
      })
      .build()
  }
}