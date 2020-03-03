import { MenuComponent } from "@components/Menu";
import { NameComponent } from "@components/Name";
import { IMenuEntity } from "@entities/menus/IMenu";

export class DialogueMenuEntity implements IMenuEntity {
  public nameComponent = new NameComponent("对话")
  public menuComponent = new MenuComponent()
}