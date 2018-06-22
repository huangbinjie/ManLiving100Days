import { IEntity } from "../../IEntity";
import { AbstractMenuEntity } from "../AbstractMenu";
import { GameStart } from "@components/Menu/messages/GameStart";
import { MenuComponent } from "@components/Menu/Menu";
import { BehaviorComponent } from "@components/Behavior/Behavior";
import { NameComponent } from "@components/name/Name";

export class GameStartMenuEntity extends AbstractMenuEntity {
  public nameComponent = new NameComponent("开始游戏")
  public menuComponent = new MenuComponent()
  public behaviorComponent = new BehaviorComponent(GameStart)
}