import { AbstractSystem } from "../../../engine/ecs/system";
import { WorldNextDay, World } from "../../world";

export class RepletionSystem extends AbstractSystem {
  createReceive() {
    return this.receiveBuilder()
      .match(WorldNextDay, () => {
        World.instance.player.repletion.value -= 1
      })
      .build()
  }
}