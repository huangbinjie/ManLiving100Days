import { AbstractStageEntity } from "./AbstractStage"
import { WoodenChestEntity } from "../chests/WoodenChest"
import { AbstractCharacterEntity } from "../characters/AbstractCharacter"
import { Stage2Entity } from "./stage2"
import { StageComponent } from "@components/Stage/Stage";
import { TravelerSwordEntity } from "../weapons/sword/TravelerSword/TravelerSword";
import { BonusComponent } from "@components/Bonus/Bonus";
import { NameComponent } from "@components/name/Name";
import { DescComponent } from "@components/desc/Desc";

export class Stage1Entity extends AbstractStageEntity {
  public nameComponent = new NameComponent("出生点")
  public descComponent = new DescComponent("安静的环境")
  public stageComponent: StageComponent

  constructor() {
    super()
    const bonus = new BonusComponent(new TravelerSwordEntity)
    const chest = new WoodenChestEntity(bonus)
    const nextStage = new Stage2Entity
    this.stageComponent = new StageComponent([chest, nextStage])
  }
}