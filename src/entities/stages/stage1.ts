import { Stage2Entity } from "@entities/stages/stage2"
import { StageComponent } from "@components/Stage";
import { BonusComponent } from "@components/Bonus";
import { NameComponent } from "@components/Name";
import { DescComponent } from "@components/Desc";
import { IStageEntity } from "@entities/stages/IStage";
import { TravelerSwordEntity } from "@entities/weapons/sword/TravelerSword";

export class Stage1Entity implements IStageEntity {
  public nameComponent = new NameComponent("出生点")
  public descComponent = new DescComponent("安静的环境")
  public stageComponent: StageComponent

  constructor() {
    const bonus = new BonusComponent(new TravelerSwordEntity)
    const nextStage = new Stage2Entity
    this.stageComponent = new StageComponent([nextStage])
  }
}