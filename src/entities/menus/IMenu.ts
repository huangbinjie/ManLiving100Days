import { IEntity } from "@entities/IEntity";
import { BehaviorComponent } from "@components/Behavior";
import { MenuComponent } from "@components/Menu";
import { NameComponent } from "@components/Name";

export interface IMenuEntity extends IEntity {
  menuComponent: MenuComponent
  nameComponent: NameComponent
  behaviorComponent?: BehaviorComponent
}