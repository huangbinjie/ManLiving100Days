import { AbstractActor } from "js-actor";
import { Attack } from "@components/attack/messages/Attack";

export class AttackSystem extends AbstractActor {
  protected createReceive() {
    return this.receiveBuilder()
      .match(Attack, attack => {

      })
      .build()
  }
}