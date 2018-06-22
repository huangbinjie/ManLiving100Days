import { BehaviorComponent } from "@components/Behavior/Behavior";
import { NameComponent } from "@components/name/Name";

export interface IEntity {
  nameComponent: NameComponent
  behavior?: BehaviorComponent
}