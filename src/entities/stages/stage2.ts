import { AbstractStageEntity } from "./AbstractStage"
import { AbstractCharacterEntity } from "../characters/AbstractCharacter"
import { StageComponent } from "@components/Stage/Stage";
import { BonusComponent } from "@components/Bonus/Bonus";
import { TravelerSwordEntity } from "../weapons/sword/TravelerSword/TravelerSword";
import { WoodenChestEntity } from "..";
import { NameComponent } from "@components/name/Name";
import { DescComponent } from "@components/desc/Desc";

export class Stage2Entity extends AbstractStageEntity {
  public nameComponent = new NameComponent("城堡")
  public descComponent = new DescComponent("最终boss的城堡")
  public stageComponent: StageComponent

  constructor() {
    super()
    const bonus = new BonusComponent(new TravelerSwordEntity)
    const chest = new WoodenChestEntity(bonus)
    this.stageComponent = new StageComponent([chest])
  }
}