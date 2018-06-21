import { AbstractSwordEntity } from "../AbstractSword"
import { NameComponent } from "../../../../components/Name";
import { DescComponent } from "../../../../components/Desc";
import { AttackComponent } from "../../../../components/attack/Attack";

export class RustySwordEntity extends AbstractSwordEntity {
  public nameComponent = new NameComponent("生锈的剑")
  public descComponent = new DescComponent("最差的武器了")
  public attackComponent = new AttackComponent(5)
}