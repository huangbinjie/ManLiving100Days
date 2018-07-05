import { IEntity } from "../IEntity"
import { StageComponent } from "@components/Stage/Stage";
import { NameComponent } from "@components/name/Name";
import { DescComponent } from "@components/desc/Desc";

export interface IStageEntity extends IEntity {
  nameComponent: NameComponent
  descComponent: DescComponent
  stageComponent: StageComponent
}