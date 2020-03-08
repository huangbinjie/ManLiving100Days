import { AbstractSystem } from "../../../engine/ecs/system";
import { WorldNextDay, World } from "../../world";

export class ThirstSystem extends AbstractSystem {
  createReceive() {
    return this.receiveBuilder()
      .match(WorldNextDay, () => {
        World.instance.player.thirst.value -= 1
      })
      .build()
  }
}