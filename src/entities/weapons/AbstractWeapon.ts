import { IEntity } from "../IEntity";
import { AttackComponent } from "../../components/Attack/Attack";
import { BehaviorComponent } from "../../components/Behavior/Behavior";
import { WeaponComponent } from "@components/weapon/Weapon";
import { NameComponent } from "@components/name/Name";
import { DescComponent } from "@components/desc/Desc";

export abstract class AbstractWeaponEntity implements IEntity {
  public weaponComponent = new WeaponComponent()
  public nameComponent: NameComponent
  public descComponent: DescComponent
  public attackComponent: AttackComponent
  public behaviorComponent?: BehaviorComponent
}