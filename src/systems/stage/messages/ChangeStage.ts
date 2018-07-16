import { IStageEntity } from "@entities/stages/IStage";

export class ChangeStage {
  constructor(public prevStage: IStageEntity, public nextStage: IStageEntity) { }
}