import { AbstractActor } from "js-actor"
import * as readline from "readline"
import { WaitingSelectStageItem } from "@components/input/messages/WaitingSelectStageItem";
import { SelectStageItemComplete } from "@components/input/messages/SelectStageItemComplete";
import { WaitingInteractWithStage } from "@components/input/messages/WaitingInteractWithStage";
import { InteractWithStageComplete } from "@components/input/messages/InteractWithStageComplete";

export class InputSystem extends AbstractActor {
  public createReceive() {
    return this.receiveBuilder()
      .match(WaitingSelectStageItem, waitingInput => {
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        })
        rl.question("我该怎么做？", answer => {
          rl.close()
          this.context.sender!.tell(new SelectStageItemComplete(waitingInput.stage, +answer - 1))
        })
      })
      .match(WaitingInteractWithStage, waitingInput => {
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        })
        rl.question("我该怎么做？", answer => {
          rl.close()
          this.context.sender!.tell(new InteractWithStageComplete(waitingInput.stage, waitingInput.item, waitingInput.value[+answer - 1]))
        })
      })
      .build()
  }
}