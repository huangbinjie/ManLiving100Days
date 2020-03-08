import term from 'terminal-kit'
import readline from "readline"
import { AbstractRenderer } from '../../engine/renderer'
import { AbstractRenderable, isRenderText, isRenderStage } from './types'

export class Renderer implements AbstractRenderer {
  private _term = term.terminal

  private rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  public writeTitle(title: string) {
    this.writeLine(title + '\n', 'magenta')
  }

  public writeLine(text: string, color: 'cyan' | 'magenta' | 'defaultColor' = 'defaultColor') {
    this._term[color](text + '\n')
  }

  public async writeMenus(menus: string[], type: 'row' | 'column') {
    if (type === 'row') {
      const response = await this._term.singleRowMenu(menus).promise
      return response.selectedIndex
    }

    if (type === 'column') {
      const response = await this._term.singleColumnMenu(menus).promise
      return response.selectedIndex
    }
  }

  public writeImage(url: string, options: { shrink?: { width: number, height: number } }) {
    this._term.drawImage(url, { shrink: options.shrink })
  }

  public async write(obj: AbstractRenderable) {
    if (isRenderText(obj)) {
      this._term.cyan(obj.content || '\n')

      await this.read('按回车继续.')

      return
    }

    if (isRenderStage(obj)) {
      this._term.magenta(obj.title)
      this._term.cyan(obj.desc || '\n')
      const actions = obj.actions.map((action, index) => String.fromCharCode(97 + index) + ". " + action)
      const response = await this._term.singleColumnMenu(actions).promise
      return response.selectedIndex
    }

  }

  public async read(question: string) {
    return new Promise<number>((resolve, reject) => {
      this.rl.question(`\n${question}\n\n`, async answer => {
        this.rl.close()
        try {
          resolve(+answer - 1)
        } catch {
          resolve(await this.read(question))
        }
      })
    })
  }

  public clear() {
    this._term.clear()
  }
}

export const renderer = new Renderer()
