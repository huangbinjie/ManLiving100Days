import { AbstractActor } from "js-actor";
import { AbstractWorld } from "../world";

export abstract class AbstractSystem extends AbstractActor {
  world!: AbstractWorld

  update() { }
}
