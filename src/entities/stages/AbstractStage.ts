import { IEntity } from "../IEntity"
import { NameComponent } from "../../components/Name";
import { DescComponent } from "../../components/Desc";
import { StageComponent } from "@components/Stage/Stage";

export abstract class AbstractStageEntity implements IEntity {
  public abstract nameComponent: NameComponent
  public abstract descComponent: DescComponent
  public abstract stageComponent: StageComponent
}