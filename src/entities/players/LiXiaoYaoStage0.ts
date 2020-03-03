import { IPlayerEntity } from "@entities/players/IPlayer";
import { PlayerComponent } from "@components/Player";
import { CharacterComponent } from "@components/character";
import { NameComponent } from "@components/Name";
import { AttackComponent } from "@components/Attack";
import { HealthComponent } from "@components/Health";
import { BehaviorComponent } from "@components/Behavior";
import { ChangeStage } from "@systems/stage/messages/ChangeStage";
import { Stage1Entity } from "@entities/stages/stage1";

export class LiXiaoYaoStage0 implements IPlayerEntity {
  public playerComponent = new PlayerComponent()
  public characterComponent = new CharacterComponent()
  public nameComponent = new NameComponent("李逍遥")
  public attackComponent = new AttackComponent(100)
  public healthComponent = new HealthComponent(1000)
  public behaviorComponent = new BehaviorComponent({ afterDied: new ChangeStage(new Stage1Entity) })
}
