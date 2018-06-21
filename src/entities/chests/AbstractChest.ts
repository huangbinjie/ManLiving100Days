import { AbstractCharacter } from "../characters/AbstractCharacter";
import { IEntity } from "../IEntity";
import { NameComponent } from "../../components/Name";
import { AbstractWeaponEntity } from "../weapons/AbstractWeapon";
import { ChestComponent } from "@components/Chest/Chest";
import { BonusComponent } from "@components/Bonus/Bonus";
import { TravelerSwordEntity } from "../weapons/sword/TravelerSword/TravelerSword";
import { DescComponent } from "@components/Desc";

export abstract class AbstractChestEntity implements IEntity {
  public abstract nameComponent: NameComponent
  public abstract descComponent: DescComponent
  public abstract bonusComponent: BonusComponent
  public abstract chestComponent: ChestComponent
}