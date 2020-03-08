import { AbstractComponent } from "./component"

export class AbstractEntity {
  public components: AbstractComponent[] = []

  public addComp(comp: AbstractComponent) {
    this.components.push(comp)
  }

  public getComp(comp: AbstractComponent) {
    return this.components[this.components.indexOf(comp)]
  }

  public removeComp(comp: AbstractComponent) {
    this.components.splice(this.components.indexOf(comp))
  }
}
