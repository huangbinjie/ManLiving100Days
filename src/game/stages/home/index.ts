import emoji from 'node-emoji'
import { World } from "../../world";
import { Stage } from '../stage';
import { StageManager } from '../../../engine/stage/manager';
import { LoadingStage } from '../loading';
import { LogStage } from './log';

export class HomeStage extends Stage {
  async renderMain() {

    this.renderer.writeTitle('家中')

    const foods = Array(5).fill(emoji.get('rice')).join(' ')
    this.renderer.writeLine(`食物(${5}): ${foods}`, 'cyan')

    const waters = Array(5).fill(emoji.get('droplet')).join(' ')
    this.renderer.writeLine(`水(${5}): ${waters}`, 'cyan')

    this.renderer.writeLine('\n')
    this.renderer.writeLine('现在要做什么呢?')
    this.renderer.writeLine('\n')

    const menus = [
      '出门',
      '查看状态',
      '查看日志',
      '睡觉',
      '说话'
    ]

    const selected = await this.renderer.writeMenus(menus, 'row')

    if (selected === 0) {

    }

    if (selected === 1) {
      this.renderProfile()
    }

    if (selected === 2) {
      StageManager.of(this.world).to(new LogStage())
    }

    // 睡觉
    if (selected === 3) {
      StageManager.of(this.world).replace(new LoadingStage())
    }
  }

  async renderProfile() {
    const player = World.instance.player

    this.renderer.clear()
    this.renderer.writeTitle('状态')
    this.renderer.writeLine(`饱食度: ${player.repletion.toString()}`)
    this.renderer.writeLine(`渴度: ${player.thirst.toString()}`)

    const menus = [
      '返回'
    ]

    const selected = await this.renderer.writeMenus(menus, 'row')

    if (selected === 0) {
      this.renderMain()
    }
  }

  preStart() {
    super.preStart()
    this.renderMain()
  }

}
