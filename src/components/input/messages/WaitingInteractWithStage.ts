import { IEntity } from "@entities/IEntity";
import { IStageEntity } from "@entities/stages/IStage";

export class WaitingInteractWithStage {
  constructor(
    public stage: IStageEntity,
    public item: IEntity,
    public value: Array<"进入" | "战斗" | "对话" | "打开" | "返回">
  ) { }
}