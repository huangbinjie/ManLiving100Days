import { IEntity } from "@entities/IEntity";

export class WelcomeComponent implements IComponent {
  constructor(public items: IEntity[]) { }
}