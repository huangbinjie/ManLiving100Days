import { IEntity } from "../IEntity";
import { NameComponent } from "../../components/Name";
import { BehaviorComponent } from "../../components/Behavior/Behavior";
import { MenuComponent } from "@components/menu/Menu";

export abstract class AbstractMenuEntity implements IEntity {
  public menuComponent: MenuComponent
  public nameComponent: NameComponent
  public behaviorComponent: BehaviorComponent
}