import { IEntity } from "../IEntity";
import { BehaviorComponent } from "../../components/Behavior/Behavior";
import { MenuComponent } from "@components/menu/Menu";
import { NameComponent } from "@components/name/Name";

export abstract class AbstractMenuEntity implements IEntity {
  public menuComponent: MenuComponent
  public nameComponent: NameComponent
  public behaviorComponent: BehaviorComponent
}