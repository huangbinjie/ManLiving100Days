import { AbstractActor } from "js-actor"
import { WaitingInput } from "./messages/WaitingInput"
import { InputComplete } from "./messages/InputComplete"
import * as readline from "readline"

export class InputSystem extends AbstractActor {
  public createReceive() {
    return this.receiveBuilder()
      .match(WaitingInput, waitingInput => {
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        })
        rl.question("我该怎么做？", answer => {
          rl.close()
          this.context.system.tell("MessagePanel", new InputComplete(waitingInput.items[+answer - 1]))
        })
      })
      .build()
  }
}