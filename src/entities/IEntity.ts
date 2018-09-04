import { BehaviorComponent } from "@components/Behavior";
import { NameComponent } from "@components/Name";

export interface IEntity {
  nameComponent: NameComponent
  behaviorComponent?: BehaviorComponent
}