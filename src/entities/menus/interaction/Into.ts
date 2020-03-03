import { MenuComponent } from "@components/Menu";
import { NameComponent } from "@components/Name";
import { IMenuEntity } from "@entities/menus/IMenu";

export class IntoMenuEntity implements IMenuEntity {
  public nameComponent = new NameComponent("进入")
  public menuComponent = new MenuComponent()
}