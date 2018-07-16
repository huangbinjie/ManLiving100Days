import { AbstractActor } from "js-actor"
import * as process from 'process'
import * as readline from "readline"
import { WaitingSelectStageItem } from "./messages/WaitingSelectStageItem";
import { SelectStageItemComplete } from "./messages/SelectStageItemComplete";
import { WaitingInteractWithStage } from "./messages/WaitingInteractWithStage";
import { InteractWithStageComplete } from "./messages/InteractWithStageComplete";
import { WaitingConfirmNextDialogue } from "@components/dialogue/messages/WaitingConfirmNextDialogue";
import { NextDialogue } from "@components/dialogue/messages/NextDialogue";
import { WaitingWelcomeInput } from "@components/welcome/messages/WaitingInput";
import { WelcomeInputComplete } from "@components/welcome/messages/InputComplete";
import { World } from "world";
import { WaitingAttackInput } from "@components/attack/messages/WaitingAttackInput";
import { AttackInputComplete } from "@components/attack/messages/AttackInputComplete";

export class InputSystem extends AbstractActor {
  constructor(private world: World) {
    super()
  }
  public createReceive() {
    return this.receiveBuilder()
      .match(WaitingWelcomeInput, waitingInput => {
        const rl = createInterface()
        rl.question("\n请选择\n\n", answer => {
          rl.close()
          this.world.broadcast(new WelcomeInputComplete(waitingInput.items[+answer - 1]))
        })
      })
      .match(WaitingSelectStageItem, () => {
        const currentStage = this.world.getStage()
        const rl = createInterface()
        rl.question("\n我该怎么做？\n\n", answer => {
          rl.close()
          this.world.broadcast(new SelectStageItemComplete(+answer - 1))
        })
      })
      .match(WaitingInteractWithStage, ({ item, menus }) => {
        const rl = createInterface()
        rl.question("\n我该怎么做？\n\n", answer => {
          rl.close()
          this.world.broadcast(new InteractWithStageComplete(item, menus[+answer - 1]))
        })
      })
      // 确认对话
      .match(WaitingConfirmNextDialogue, waiting => {
        const rl = createInterface()
        rl.question("\n输入回车下一句\n\n", () => {
          rl.close()
          this.world.broadcast(new NextDialogue(waiting.character, ++waiting.currentIndex))
        })
      })
      // 战斗
      .match(WaitingAttackInput, ({ target }) => {
        const rl = createInterface()
        rl.question("\n接下来怎么做\n\n", answer => {
          rl.close()
          this.world.broadcast(new AttackInputComplete(target, +answer - 1))
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