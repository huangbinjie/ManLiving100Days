import { AbstractActor } from "js-actor"
import * as process from 'process'
import * as readline from "readline"
import { World } from "world";
import { WaitingInput } from "@systems/input/messages/WaitingInput";
import { WaitingEnter } from "@systems/input/messages/WaitingEnter";
import { WaitingBattle } from "./messages/WaitingBattle";

export class InputSystem extends AbstractActor {
  constructor(private world: World) {
    super()
  }
  public createReceive() {
    return this.receiveBuilder()
      .answer(WaitingInput, resolve => () => {
        const rl = createInterface()
        rl.question("\n请选择\n\n", answer => {
          rl.close()
          resolve(+answer - 1)
        })
      })
      .answer(WaitingEnter, resolve => () => {
        const rl = createInterface()
        rl.question("\n按回车继续\n\n", answer => {
          rl.close()
          resolve(+answer - 1)
        })
      })
      .answer(WaitingBattle, resolve => () => {
        const rl = createInterface()
        rl.question("\n接下来要怎么做\n\n", answer => {
          rl.close()
          resolve(+answer - 1)
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