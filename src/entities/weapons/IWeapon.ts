import { IEntity } from "../IEntity";
import { AttackComponent } from "../../components/Attack/Attack";
import { BehaviorComponent } from "../../components/Behavior/Behavior";
import { WeaponComponent } from "@components/weapon/Weapon";
import { NameComponent } from "@components/name/Name";
import { DescComponent } from "@components/desc/Desc";

export interface IWeaponEntity extends IEntity {
  weaponComponent: WeaponComponent
  nameComponent: NameComponent
  descComponent: DescComponent
  attackComponent: AttackComponent
  behaviorComponent?: BehaviorComponent
}