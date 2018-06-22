import { AbstractSwordEntity } from "../AbstractSword"
import { AttackComponent } from "../../../../components/attack/Attack";
import { NameComponent } from "@components/name/Name";
import { DescComponent } from "@components/desc/Desc";

export class RustySwordEntity extends AbstractSwordEntity {
  public nameComponent = new NameComponent("生锈的剑")
  public descComponent = new DescComponent("最差的武器了")
  public attackComponent = new AttackComponent(5)
}