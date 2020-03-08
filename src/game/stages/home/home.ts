import emoji from 'node-emoji'
import { World, WorldNextDay } from "../../world";
import { Renderer, renderer } from "../../renderer/renderer";
import { AbstractStage } from "../../../engine/stage/abstract_stage";

export class HomeStage extends AbstractStage {
  async renderMain() {
    renderer.clear()

    renderer.writeTitle('家中')

    const foods = Array(5).fill(emoji.get('rice')).join(' ')
    renderer.writeLine(`食物(${5}): ${foods}`, 'cyan')

    const waters = Array(5).fill(emoji.get('droplet')).join(' ')
    renderer.writeLine(`水(${5}): ${waters}`, 'cyan')

    renderer.writeLine('\n')
    renderer.writeLine('现在要做什么呢?')

    const menus = [
      '出门',
      '查看状态',
      '洗澡',
      '睡觉',
      '说话'
    ]

    const selected = await renderer.writeMenus(menus, 'column')

    if (selected === 0) {

    }

    if (selected === 1) {
      this.renderProfile()
    }

    // 睡觉
    if (selected === 3) {
      World.instance.broadcast(new WorldNextDay())
    }
  }

  async renderProfile() {
    const player = World.instance.player

    renderer.clear()
    renderer.writeTitle('状态')
    renderer.writeLine(`饱食度: ${player.repletion.toString()}`)
    renderer.writeLine(`渴度: ${player.thirst.toString()}`)

    const menus = [
      '返回'
    ]

    const selected = await renderer.writeMenus(menus, 'row')

    if (selected === 0) {
      this.renderMain()
    }
  }

  preStart() {
    this.renderMain()
  }

}
