import { IEntity } from "@entities/IEntity";
import { MenuComponent } from "@components/menu/Menu";
import { BehaviorComponent } from "@components/Behavior/Behavior";
import { NameComponent } from "@components/name/Name";
import { GameStart } from "@components/welcome/messages/GameStart";
import { IMenuEntity } from "@entities/menus/IMenu";

export class DialogueMenuEntity implements IMenuEntity {
  public nameComponent = new NameComponent("对话")
  public menuComponent = new MenuComponent()
}