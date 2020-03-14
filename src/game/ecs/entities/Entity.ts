import { AbstractEntity } from "../../../engine/ecs/entity";
import { NameComponent } from "../components/common/Name";

export abstract class Entity extends AbstractEntity {
  abstract nameComponent: NameComponent
}
