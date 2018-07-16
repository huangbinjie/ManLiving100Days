import { PlayerComponent } from "@components/player/Player";
import { NameComponent } from "@components/name/Name";
import { HealthComponent } from "@components/health/Health";
import { EquipmentComponent } from "@components/equipment/Equipment";
import { RustySwordEntity } from "@entities/weapons/sword/RustySword";
import { AttackComponent } from "@components/Attack/Attack";
import { ICharacterEntity } from "@entities/characters/ICharacter";
import { CharacterComponent } from "@components/character/character";
import { DialogueComponent } from "@components/dialogue/Dialogue";
import { BehaviorComponent } from "@components/Behavior/Behavior";
import { IPlayerEntity } from "@entities/players/IPlayer";

export class LiXiaoYao implements IPlayerEntity {
  public playerComponent = new PlayerComponent()
  public characterComponent = new CharacterComponent()
  public nameComponent = new NameComponent("李逍遥")
  public attackComponent = new AttackComponent(100)
  public healthComponent = new HealthComponent(1000)
  public behaviorComponent = new BehaviorComponent({})
}
