import { StageComponent } from "@components/Stage";
import { BonusComponent } from "@components/Bonus";
import { TravelerSwordEntity } from "@entities/weapons/sword/TravelerSword";
import { NameComponent } from "@components/Name";
import { DescComponent } from "@components/Desc";
import { IStageEntity } from "@entities/stages/IStage";

export class Stage2Entity implements IStageEntity {
  public nameComponent = new NameComponent("城堡")
  public descComponent = new DescComponent("最终boss的城堡")
  public stageComponent: StageComponent

  constructor() {
    this.stageComponent = new StageComponent([])
  }
}