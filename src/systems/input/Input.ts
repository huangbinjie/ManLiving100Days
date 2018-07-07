import { AbstractActor } from "js-actor"
import * as process from 'process'
import * as readline from "readline"
import { WaitingSelectStageItem } from "@components/input/messages/WaitingSelectStageItem";
import { SelectStageItemComplete } from "@components/input/messages/SelectStageItemComplete";
import { WaitingInteractWithStage } from "@components/input/messages/WaitingInteractWithStage";
import { InteractWithStageComplete } from "@components/input/messages/InteractWithStageComplete";
import { WaitingConfirmNextDialogue } from "@components/dialogue/messages/WaitingConfirmNextDialogue";
import { NextDialogue } from "@components/dialogue/messages/NextDialogue";
import { WaitingWelcomeInput } from "@components/welcome/messages/WaitingInput";
import { WelcomeInputComplete } from "@components/welcome/messages/InputComplete";

export class InputSystem extends AbstractActor {
  public createReceive() {
    return this.receiveBuilder()
      .match(WaitingWelcomeInput, waitingInput => {
        const rl = createInterface()
        rl.question("\n请选择\n\n", answer => {
          rl.close()
          this.context.system.tell("WelcomeSystem", new WelcomeInputComplete(waitingInput.items[+answer - 1]))
        })
      })
      .match(WaitingSelectStageItem, waitingInput => {
        const rl = createInterface()
        rl.question("\n我该怎么做？\n\n", answer => {
          rl.close()
          this.context.system.tell("StageSystem", new SelectStageItemComplete(waitingInput.stage, +answer - 1))
        })
      })
      .match(WaitingInteractWithStage, waitingInput => {
        const rl = createInterface()
        rl.question("\n我该怎么做？\n\n", answer => {
          rl.close()
          this.context.system.tell("StageSystem", new InteractWithStageComplete(waitingInput.stage, waitingInput.item, waitingInput.menus[+answer - 1]))
        })
      })
      // 确认对话
      .match(WaitingConfirmNextDialogue, waiting => {
        const rl = createInterface()
        rl.question("\n输入回车下一句\n\n", () => {
          rl.close()
          this.context.system.tell("DialogueSystem", new NextDialogue(waiting.dialogues, ++waiting.currentIndex))
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