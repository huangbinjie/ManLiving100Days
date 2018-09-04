import { IEntity } from "@entities/IEntity";

export class WaitingInput {
  constructor(public entities: IEntity[]) { }
}