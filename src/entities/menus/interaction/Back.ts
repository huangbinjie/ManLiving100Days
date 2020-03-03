import { MenuComponent } from "@components/Menu";
import { NameComponent } from "@components/Name";
import { IMenuEntity } from "@entities/menus/IMenu";

export class BackMenuEntity implements IMenuEntity {
  public nameComponent = new NameComponent("返回")
  public menuComponent = new MenuComponent()
}