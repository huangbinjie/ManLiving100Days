import { IEntity } from "@entities/IEntity"
import { StageComponent } from "@components/Stage";
import { NameComponent } from "@components/Name";
import { DescComponent } from "@components/Desc";

export interface IStageEntity extends IEntity {
  nameComponent: NameComponent
  descComponent: DescComponent
  stageComponent: StageComponent
}