import { HomeStage } from "../home";
import { StageManager } from "../../../engine/stage/manager";
import { Stage } from "../stage";
import { WorldNextDay } from "../../world";

export class LoadingStage extends Stage {
  preStart() {
    super.preStart()
    this.renderMain()
  }

  async renderMain() {
    this.renderer.writeTitle('又活了一天')

    this.renderer.writeLine(`目前存活天数: ${++this.world.liveDays}`)

    await this.renderer.writeMenus(['继续'], 'column')

    this.world.broadcast(new WorldNextDay())

    StageManager.of(this.world).replace(new HomeStage())
  }
}
