import { IEntity } from "../IEntity";
import { MenuComponent } from "@components/Menu/Menu";
import { BehaviorComponent } from "@components/Behavior/Behavior";
import { NameComponent } from "@components/name/Name";
import { GameStart } from "@components/welcome/messages/GameStart";
import { IMenuEntity } from "@entities/menus/IMenu";

export class BackMenuEntity implements IMenuEntity {
  public nameComponent = new NameComponent("返回")
  public menuComponent = new MenuComponent()
}