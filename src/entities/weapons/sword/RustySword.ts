import { AttackComponent } from "../../../../components/attack/Attack";
import { NameComponent } from "@components/name/Name";
import { DescComponent } from "@components/desc/Desc";
import { ISwordEntity } from "@entities/weapons/sword/ISword";
import { WeaponComponent } from "@components/weapon/Weapon";

export class RustySwordEntity implements ISwordEntity {
  public weaponComponent = new WeaponComponent()
  public nameComponent = new NameComponent("生锈的剑")
  public descComponent = new DescComponent("最差的武器了")
  public attackComponent = new AttackComponent(5)
}