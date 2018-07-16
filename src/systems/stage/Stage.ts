import { AbstractActor } from "js-actor"
import { IEntity } from "@entities/IEntity";
import { ChangeStage } from "./messages/ChangeStage";
import { Stage1Entity } from "@entities/stages/stage1";
import { WaitingSelectStageItem } from "../input/messages/WaitingSelectStageItem";
import { GameStart } from "../welcome/messages/GameStart";
import { IStageEntity } from "@entities/stages/IStage";
import { ICharacterEntity } from "@entities/characters/ICharacter";
import { WaitingInteractWithStage } from "../input/messages/WaitingInteractWithStage";
import { SelectStageItemComplete } from "../input/messages/SelectStageItemComplete";
import { InteractWithStageComplete } from "../input/messages/InteractWithStageComplete";
import { Stage0Entity } from "@entities/stages/stage0";
import { IChestEntity } from "@entities/chests";
import { StartDialogue } from "@components/dialogue/messages/StartDialogue";
import { World } from "world";
import { GoIntoMenuEntity } from "@entities/menus/GoInto";
import { IMenuEntity } from "@entities/menus/IMenu";
import { BattleMenuEntity } from "@entities/menus/Battle";
import { DialogueMenuEntity } from "@entities/menus/Dialogue";
import { OpenMenuEntity } from "@entities/menus/Open";
import { BackMenuEntity } from "@entities/menus/Back";
import { DescribeStage } from "@components/console/messages/DescribeStage";
import { DescribeMenus } from "@components/console/messages/DescribeMenus";
import { ReturnStage } from "./messages/ReturnStage";

export class StageSystem extends AbstractActor {
  constructor(private world: World) {
    super()
  }
  protected createReceive() {
    return this.receiveBuilder()
      .match(GameStart, () => {
        const stage0 = new Stage0Entity()
        this.world.addEntity(stage0)
        this.world.broadcast(new DescribeStage(stage0))
        this.world.broadcast(new WaitingSelectStageItem())
      })
      .match(ChangeStage, ({ prevStage, nextStage }) => {
        this.world.removeEntity(prevStage)
        this.world.addEntity(nextStage)
        this.world.broadcast(new DescribeStage(nextStage))
        this.world.broadcast(new WaitingSelectStageItem())
      })
      .match(ReturnStage, () => {
        const stage = this.world.getStage()
        this.world.broadcast(new DescribeStage(stage))
        this.world.broadcast(new WaitingSelectStageItem())
      })
      .match(SelectStageItemComplete, ({ index }) => {
        const stage = this.world.getStage()
        const item = stage.stageComponent.items[index]
        const interactiveMenus: IMenuEntity[] = []
        if ((item as IStageEntity).stageComponent) {
          interactiveMenus.push(new GoIntoMenuEntity())
        }
        if ((item as ICharacterEntity).enemyComponent) {
          interactiveMenus.push(new BattleMenuEntity)
        }
        if ((item as ICharacterEntity).dialogueComponent) {
          interactiveMenus.push(new DialogueMenuEntity())
        }
        if ((item as IChestEntity).chestComponent) {
          interactiveMenus.push(new OpenMenuEntity())
        }
        interactiveMenus.push(new BackMenuEntity())
        this.world.broadcast(new DescribeMenus(interactiveMenus))
        this.world.broadcast(new WaitingInteractWithStage(item, interactiveMenus))
      })
      .match(InteractWithStageComplete, ({ item, menu }) => {
        switch (menu.nameComponent.value) {
          case "进入":
            const stage = this.world.getStage()
            this.world.broadcast(new ChangeStage(stage, item as IStageEntity))
            break;
          case "对话":
            this.world.broadcast(new StartDialogue((item as ICharacterEntity)))
            break;
          case "返回":
            this.world.broadcast(new ReturnStage())
            break;
        }
      })
      .build()
  }
}
