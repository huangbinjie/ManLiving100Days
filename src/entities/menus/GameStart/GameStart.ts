import { IEntity } from "../../IEntity";
import { NameComponent } from "../../../components/Name";
import { AbstractMenuEntity } from "../AbstractMenu";
import { GameStart } from "@components/Menu/messages/GameStart";
import { MenuComponent } from "@components/Menu/Menu";
import { BehaviorComponent } from "@components/Behavior/Behavior";

export class GameStartMenuEntity extends AbstractMenuEntity {
  public nameComponent = new NameComponent("开始游戏")
  public menuComponent = new MenuComponent()
  public behaviorComponent = new BehaviorComponent(GameStart)
}