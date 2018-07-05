import { IEntity } from "../IEntity";
import { BehaviorComponent } from "../../components/Behavior/Behavior";
import { MenuComponent } from "@components/menu/Menu";
import { NameComponent } from "@components/name/Name";

export interface IMenuEntity extends IEntity {
  menuComponent: MenuComponent
  nameComponent: NameComponent
  behaviorComponent: BehaviorComponent
}