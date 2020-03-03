import { AbstractActor } from "js-actor"
import * as process from 'process'
import * as readline from "readline"
import { World } from "world";
import { WaitingInput } from "@systems/input/messages/WaitingInput";
import { WaitingEnter } from "@systems/input/messages/WaitingEnter";

export class InputSystem extends AbstractActor {
  constructor(private world: World) {
    super()
  }
  public createReceive() {
    return this.receiveBuilder()
      .answer(WaitingEnter, resolve => () => {
        const rl = createInterface()
        rl.question("\n输入回车继续\n", answer => {
          rl.close()
          resolve(1)
        })
      })
      .answer(WaitingInput, resolve => ({ question }) => {
        const rl = createInterface()
        rl.question(question, async answer => {
          rl.close()
          try {
            const result = +answer - 1
            if (isNaN(result) || result < 0) {
              resolve(await this.getSelf().ask(new WaitingInput))
            } else {
              resolve(result)
            }
          } catch {
            const result = await this.getSelf().ask(new WaitingInput)
            resolve(result)
          }
        })
      })
      .build()
  }
}

function createInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
}