
import { StageComponent } from "@components/Stage";
import { NameComponent } from "@components/Name";
import { DescComponent } from "@components/Desc";
import { IStageEntity } from "@entities/stages/IStage";
import { TuGuai } from "@entities/characters/stage0/ToGuai";
import { LuoChaGuiPo } from "@entities/characters/stage0/LuoChaGuiPo";

/**
 * [罗刹洞（梦中）]
　　跟踪着几个小鬼，李逍遥乘着飞剑来到罗刹洞。在洞的深处，遇见罗刹鬼婆，并于之决一死战。由于罗刹鬼婆实在难以对付，李逍遥最终告败。
 */
export class Stage0Entity implements IStageEntity {
  public nameComponent = new NameComponent("罗刹洞")
  public descComponent = new DescComponent("梦中")
  public stageComponent: StageComponent

  constructor() {
    this.stageComponent = new StageComponent([new TuGuai(), new LuoChaGuiPo()])
  }
}
