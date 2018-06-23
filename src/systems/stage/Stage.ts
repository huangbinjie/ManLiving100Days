import { AbstractActor } from "js-actor"
import { IEntity } from "entities/IEntity";
import { ChangeStage } from "@components/Stage/messages/ChangeStage";
import { AbstractStageEntity } from "@entities/stages/AbstractStage";
import { Stage1Entity } from "@entities/stages/stage1";
import { AbstractChestEntity, AbstractCharacterEntity } from "entities";
import { WaitingInput } from "@components/input/messages/WaitingInput";
import { InputComplete } from "@components/input/messages/InputComplete";
import { GameStart } from "@components/welcome/messages/GameStart";

export class StageSystem extends AbstractActor {
  protected createReceive() {
    return this.receiveBuilder()
      .match(GameStart, gameStart => {
        const stage1 = new Stage1Entity()
        this.describeStage(stage1)
        this.tellLogger(gameStart)
        this.context.system.tell("Input", new WaitingInput(stage1.stageComponent.items))
      })
      .match(ChangeStage, changeStage => {
        this.describeStage(changeStage.stage)
        this.tellLogger(changeStage)
        this.context.system.tell("Input", new WaitingInput(changeStage.stage.stageComponent.items))
      })
      .match(InputComplete, inputComplete => {
        const item = inputComplete.item
        if (item instanceof AbstractStageEntity) {
          this.getSelf().tell(new ChangeStage(item))
        } else if (item instanceof AbstractChestEntity) {
          
        } else if (item instanceof AbstractCharacterEntity) {

        }
      })
      .build()
  }

  private describeStage(stage: AbstractStageEntity) {
    console.info(`
    地点：${stage.nameComponent.value}\n
    描述：${stage.descComponent.value}\n
    这儿有：${this.getItemName(stage.stageComponent.items).join("  ")}
  `)
  }

  private tellLogger(message: object) {
    this.context.system.tell("Logger", message)
  }

  private getItemName(items: IEntity[]) {
    return items.map((item, index) => `${index + 1}.${item.nameComponent.value}`)
  }
}