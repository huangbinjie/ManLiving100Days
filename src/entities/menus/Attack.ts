import { MenuComponent } from "@components/Menu";
import { NameComponent } from "@components/Name";
import { IMenuEntity } from "@entities/menus/IMenu";

export class AttackMenuEntity implements IMenuEntity {
  public nameComponent = new NameComponent("攻击")
  public menuComponent = new MenuComponent()
}