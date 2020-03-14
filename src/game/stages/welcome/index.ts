import { World } from "../../world";
import { UnimplementedError } from "../../utils/errors";
import { HomeStage } from "../home";
import { StageManager } from "../../../engine/stage/manager";
import { Stage } from "../stage";

export class WelcomeStage extends Stage {
  async preStart() {
    super.preStart()
    this.world = World.instance

    const stageTitle = '是男人就活100天'
    const stageMenus = [
      '开始游戏',
      '关于'
    ]
    this.renderer.writeTitle(stageTitle)

    const selected = await this.renderer.writeMenus(stageMenus, 'column')

    if (selected === 0) {
      this.renderer.clear()
      this.renderer.writeLine('2020年，一场病毒在全球爆发, TODO.')

      await this.renderer.writeMenus(['按回车继续'], 'column')

      StageManager.of(this.world).replace(new HomeStage())
    }

    if (selected === 1) {
      throw UnimplementedError()
    }
  }
}