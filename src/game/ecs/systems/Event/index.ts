import { WorldNextDay } from "../../../world";
import { System } from "../System";
import { eventsFor0To30Days } from "./events";
import prizes, { Prize } from "./prizes";
import punishments from "./punishments";

export class EventSystem extends System {
  createReceive() {
    return this.receiveBuilder().match(WorldNextDay, () => {
      let event!: string

      if (this.world.liveDays < 30) {
        event = randomEvent(eventsFor0To30Days)
      }

      if (event.indexOf("$prize") > -1) {
        const target = randomPrize(prizes)
        const prize = new target()
        this.world.addEntity(prize)
        const compiled = event.replace("$prize", prize.nameComponent.value)
        this.world.logs.push(compiled)
      }
      // event.replace("$punishment", randomPrize(punishments))

    }).build()
  }
}

function randomEvent(events: string[]) {
  const index = gauss()

  return events[index]
}
function randomPrize(prizes: Prize[]) {
  const index = gauss()

  return prizes[index]
}
// skew 越大越靠近左侧
function gauss(skew = 6) {
  let rand = 0
  let num = skew

  for (let i = num; i--;) {
    rand += Math.random()
  }

  return (rand - num / 2) / (num / 2)
}