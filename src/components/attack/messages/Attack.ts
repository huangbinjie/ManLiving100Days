import { IEntity } from "entities/IEntity";

export class Attack {
  constructor(
    public source: IEntity,
    public target: IEntity
  ) { }
}