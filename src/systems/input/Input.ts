import { AbstractActor } from "js-actor"
import * as readline from "readline"
import { WaitingInput } from "@components/input/messages/WaitingInput";
import { InputComplete } from "@components/input/messages/InputComplete";

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
          this.context.sender.tell(new InputComplete(waitingInput.items[+answer - 1]))
        })
      })
      .build()
  }
}