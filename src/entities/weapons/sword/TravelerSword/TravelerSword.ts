import { AbstractSwordEntity } from "../AbstractSword"
import { NameComponent } from "@components/Name";
import { DescComponent } from "@components/Desc";
import { AttackComponent } from "@components/Attack/Attack";

export class TravelerSwordEntity extends AbstractSwordEntity {
  public nameComponent = new NameComponent("旅人之剑")
  public descComponent = new DescComponent("旅行者们一般都会配备的防身之物")
  public attackComponent = new AttackComponent(10)
}