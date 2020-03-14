import { Stage } from "../stage";
import { StageManager } from "../../../engine/stage/manager";
import { UnimplementedError } from "../../utils/errors";

export class LogStage extends Stage {
  private currentDay = 0

  async preStart() {
    super.preStart()

    this.currentDay = this.world.liveDays

    this.world.renderer.writeTitle("日志")

    this.world.renderer.writeLine(`第${this.world.liveDays}天`)

    const log = this.world.logs[this.world.liveDays]

    this.world.renderer.writeLine(log)

    let menus = ['返回']

    if (this.currentDay > 0) {
      menus.push('前一天')
    }

    if (this.currentDay < this.world.liveDays) {
      menus.push('下一天')
    }

    const selected = await this.world.renderer.writeMenus(menus, 'row')

    if (selected === 0) {
      StageManager.back()
    }

    if (selected === 1) {
      throw UnimplementedError('前一天')
    }

    if (selected === 2) {
      throw UnimplementedError('下一天')
    }
  }
}