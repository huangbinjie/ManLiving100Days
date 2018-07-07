import { IEntity } from "@entities/IEntity";
import { IStageEntity } from "@entities/stages/IStage";
import { IMenuEntity } from "@entities/menus/IMenu";

export class InteractWithStageComplete {
  constructor(
    public stage: IStageEntity,
    public item: IEntity,
    public menu: IMenuEntity
  ) { }
}