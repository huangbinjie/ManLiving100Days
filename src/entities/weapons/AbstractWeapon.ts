import { IEntity } from "../IEntity";
import { WeaponComponent } from "../../components/Weapon";
import { NameComponent } from "../../components/Name";
import { DescComponent } from "../../components/Desc";
import { AttackComponent } from "../../components/Attack/Attack";
import { BehaviorComponent } from "../../components/Behavior/Behavior";

export abstract class AbstractWeaponEntity implements IEntity {
  public weaponComponent = new WeaponComponent()
  public nameComponent: NameComponent
  public descComponent: DescComponent
  public attackComponent: AttackComponent
  public behaviorComponent?: BehaviorComponent
}