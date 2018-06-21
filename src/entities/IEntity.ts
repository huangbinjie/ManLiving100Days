import { NameComponent } from "@components/Name";
import { BehaviorComponent } from "@components/Behavior/Behavior";

export interface IEntity {
  nameComponent: NameComponent
  behavior?: BehaviorComponent
}