import { MenuComponent } from "@components/Menu";
import { NameComponent } from "@components/Name";
import { IMenuEntity } from "@entities/menus/IMenu";

export class GameStartMenuEntity implements IMenuEntity {
  public nameComponent = new NameComponent("开始游戏")
  public menuComponent = new MenuComponent()
}