import { IEntity } from "../IEntity";
import { AbstractWeaponEntity } from "../weapons/AbstractWeapon";
import { ChestComponent } from "@components/Chest/Chest";
import { BonusComponent } from "@components/Bonus/Bonus";
import { TravelerSwordEntity } from "../weapons/sword/TravelerSword/TravelerSword";
import { NameComponent } from "@components/name/Name";
import { DescComponent } from "@components/desc/Desc";

export interface IChestEntity extends IEntity {
  nameComponent: NameComponent
  descComponent: DescComponent
  bonusComponent: BonusComponent
  chestComponent: ChestComponent
}