import { World } from "../../world";
import { UnimplementedError } from "../../utils/errors";
import { HomeStage } from "../home/home";
import { AbstractStage } from "../../../engine/stage/abstract_stage";
import { renderer } from "../../renderer/renderer";
import { StageManager } from "../../../engine/stage/manager";

export class WelcomeStage extends AbstractStage {
  async preStart() {
    this.world = World.instance

    const stageTitle = '是男人就活100天'
    const stageMenus = [
      '开始游戏',
      '关于'
    ]
    renderer.writeTitle(stageTitle)

    const selected = await renderer.writeMenus(stageMenus, 'column')

    if (selected === 0) {
      renderer.clear()
      renderer.writeLine('2020年，一场病毒在全球爆发, TODO.')

      await renderer.writeMenus(['按回车继续'], 'column')

      StageManager.of(this.world).to(new HomeStage())
    }

    if (selected === 1) {
      throw UnimplementedError()
    }
  }
}