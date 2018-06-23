import { WoodenChestEntity } from "../chests/WoodenChest"
import { Stage2Entity } from "./stage2"
import { StageComponent } from "@components/Stage/Stage";
import { TravelerSwordEntity } from "../weapons/sword/TravelerSword/TravelerSword";
import { BonusComponent } from "@components/Bonus/Bonus";
import { NameComponent } from "@components/name/Name";
import { DescComponent } from "@components/desc/Desc";
import { IStageEntity } from "@entities/stages/IStage";

export class Stage1Entity implements IStageEntity {
  public nameComponent = new NameComponent("出生点")
  public descComponent = new DescComponent("安静的环境")
  public stageComponent: StageComponent

  constructor() {
    const bonus = new BonusComponent(new TravelerSwordEntity)
    const chest = new WoodenChestEntity(bonus)
    const nextStage = new Stage2Entity
    this.stageComponent = new StageComponent([chest, nextStage])
  }
}