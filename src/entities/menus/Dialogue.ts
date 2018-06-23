import { NameComponent } from "@components/name/Name";
import { BehaviorComponent } from "@components/Behavior/Behavior";
import { AbstractCharacterEntity } from "..";
import { Dialogue } from "@components/character/messages/Dialogue";
import { IMenuEntity } from "@entities/menus/IMenu";
import { MenuComponent } from "@components/menu/Menu";

export class DialogueMenuEntity implements IMenuEntity {
  public menuComponent = new MenuComponent()
  public nameComponent = new NameComponent("对话")
  public behaviorComponent: BehaviorComponent

  constructor(character: AbstractCharacterEntity) {
    this.behaviorComponent = new BehaviorComponent(new Dialogue(character))
  }
}