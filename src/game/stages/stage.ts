import { AbstractStage } from "../../engine/stage/abstract_stage";
import { World } from "../world";
import { renderer } from "../renderer/renderer";

export abstract class Stage extends AbstractStage {
  world!: World
  renderer = renderer

  preStart() {
    renderer.clear()
  }

  postStop() {
    renderer.clear()
  }
}
