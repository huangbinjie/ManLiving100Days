import { IEntity } from "../../entities/IEntity";

export class StageComponent implements IComponent {
  constructor(public items: IEntity[]) { }
}