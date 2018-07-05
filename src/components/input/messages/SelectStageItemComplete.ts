import { IEntity } from "@entities/IEntity";
import { IStageEntity } from "@entities/stages/IStage";

export class SelectStageItemComplete {
  constructor(public stage: IStageEntity, public index: number) { }
}