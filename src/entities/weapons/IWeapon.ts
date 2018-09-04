import { IEntity } from "@entities/IEntity";
import { AttackComponent } from "@components/Attack";
import { BehaviorComponent } from "@components/Behavior";
import { WeaponComponent } from "@components/Weapon";
import { NameComponent } from "@components/Name";
import { DescComponent } from "@components/Desc";

export interface IWeaponEntity extends IEntity {
  weaponComponent: WeaponComponent
  nameComponent: NameComponent
  descComponent: DescComponent
  attackComponent: AttackComponent
  behaviorComponent?: BehaviorComponent
}