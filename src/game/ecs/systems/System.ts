import { AbstractSystem } from "../../../engine/ecs/system";
import { World } from "../../world";

export abstract class System extends AbstractSystem {
  world!: World
}
