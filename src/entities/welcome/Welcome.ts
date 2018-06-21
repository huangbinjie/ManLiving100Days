import { IEntity } from "../IEntity"
import { NameComponent } from "@components/Name";
import { WelcomeComponent } from "@components/Welcome/Welcome";
import { GameStartMenu } from "@entities/menus/GameStart/GameStart";

export class WelcomeEntity implements IEntity {
  public nameComponent = new NameComponent("欢迎页")
  public welcomponent: WelcomeComponent

  constructor() {
    const startGame = new GameStartMenu()
    this.welcomponent = new WelcomeComponent([startGame])
  }
}