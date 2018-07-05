import { StageComponent } from "@components/Stage/Stage";
import { BonusComponent } from "@components/Bonus/Bonus";
import { TravelerSwordEntity } from "@entities/weapons/sword/TravelerSword";
import { NameComponent } from "@components/name/Name";
import { DescComponent } from "@components/desc/Desc";
import { IStageEntity } from "@entities/stages/IStage";
import { WoodenChestEntity } from "@entities/chests";

export class Stage2Entity implements IStageEntity {
  public nameComponent = new NameComponent("城堡")
  public descComponent = new DescComponent("最终boss的城堡")
  public stageComponent: StageComponent

  constructor() {
    const bonus = new BonusComponent(new TravelerSwordEntity)
    const chest = new WoodenChestEntity(bonus)
    this.stageComponent = new StageComponent([chest])
  }
}