import { IEntity } from "../IEntity"
import { StageComponent } from "@components/Stage/Stage";
import { NameComponent } from "@components/name/Name";
import { DescComponent } from "@components/desc/Desc";

export abstract class AbstractStageEntity implements IEntity {
  public abstract nameComponent: NameComponent
  public abstract descComponent: DescComponent
  public abstract stageComponent: StageComponent
}