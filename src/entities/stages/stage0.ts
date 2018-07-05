
import { StageComponent } from "@components/Stage/Stage";
import { BonusComponent } from "@components/Bonus/Bonus";
import { NameComponent } from "@components/name/Name";
import { DescComponent } from "@components/desc/Desc";
import { IStageEntity } from "@entities/stages/IStage";
import { LuoChaGuiPo } from "@entities/characters/stage0/LuoChaGuiPo";
import { IMenuEntity } from "@entities/menus/IMenu";
import { MenuComponent } from "@components/Menu/Menu";
import { BehaviorComponent } from "@components/Behavior/Behavior";
import { TuGuai } from "@entities/characters/stage0/ToGuai";
import { Stage1Entity } from "@entities/stages/stage1";

/**
 * [罗刹洞（梦中）]
　　跟踪着几个小鬼，李逍遥乘着飞剑来到罗刹洞。在洞的深处，遇见罗刹鬼婆，并于之决一死战。由于罗刹鬼婆实在难以对付，李逍遥最终告败。
 */
export class Stage0Entity implements IStageEntity {
  public nameComponent = new NameComponent("罗刹洞")
  public descComponent = new DescComponent("梦中")
  public stageComponent: StageComponent

  constructor() {
    this.stageComponent = new StageComponent([new TuGuai(), new Stage1Entity()])
  }
}