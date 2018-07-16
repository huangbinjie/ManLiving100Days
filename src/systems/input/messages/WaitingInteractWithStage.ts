import { IEntity } from "@entities/IEntity";
import { IStageEntity } from "@entities/stages/IStage";
import { IMenuEntity } from "@entities/menus/IMenu";

export class WaitingInteractWithStage {
  constructor(
    public item: IEntity,
    public menus: IMenuEntity[]
  ) { }
}