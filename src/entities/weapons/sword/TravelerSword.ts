import { AttackComponent } from "@components/Attack";
import { NameComponent } from "@components/Name";
import { DescComponent } from "@components/Desc";
import { ISwordEntity } from "@entities/weapons/sword/ISword";
import { WeaponComponent } from "@components/Weapon";

export class TravelerSwordEntity implements ISwordEntity {
  public weaponComponent = new WeaponComponent()
  public nameComponent = new NameComponent("旅人之剑")
  public descComponent = new DescComponent("旅行者们一般都会配备的防身之物")
  public attackComponent = new AttackComponent(10)
}