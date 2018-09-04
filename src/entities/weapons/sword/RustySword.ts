import { NameComponent } from "@components/Name";
import { DescComponent } from "@components/Desc";
import { ISwordEntity } from "@entities/weapons/sword/ISword";
import { WeaponComponent } from "@components/Weapon";
import { AttackComponent } from "@components/Attack";

export class RustySwordEntity implements ISwordEntity {
  public weaponComponent = new WeaponComponent()
  public nameComponent = new NameComponent("生锈的剑")
  public descComponent = new DescComponent("最差的武器了")
  public attackComponent = new AttackComponent(5)
}