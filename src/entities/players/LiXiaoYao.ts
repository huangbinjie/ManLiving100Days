import { IPlayerEntity } from "@entities/players/IPlayer";
import { PlayerComponent } from "@components/Player";
import { CharacterComponent } from "@components/character";
import { NameComponent } from "@components/Name";
import { AttackComponent } from "@components/Attack";
import { HealthComponent } from "@components/Health";
import { BehaviorComponent } from "@components/Behavior";

export class LiXiaoYao implements IPlayerEntity {
  public playerComponent = new PlayerComponent()
  public characterComponent = new CharacterComponent()
  public nameComponent = new NameComponent("李逍遥")
  public attackComponent = new AttackComponent(100)
  public healthComponent = new HealthComponent(1000)
  public behaviorComponent = new BehaviorComponent({})
}
