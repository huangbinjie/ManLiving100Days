import { IEntity } from "@entities/IEntity"
import { NameComponent } from "@components/name/Name"
import { HealthComponent } from "@components/health/Health"
import { EquipmentComponent } from "@components/equipment/Equipment"
import { AttackComponent } from "@components/Attack/Attack";
import { DialogueComponent } from "@components/dialogue/Dialogue";
import { EnemyComponent } from "@components/enemy/enemy";
import { BehaviorComponent } from "@components/Behavior/Behavior";
import { PlayerComponent } from "@components/player/Player";

export interface IPlayerEntity extends IEntity {
  playerComponent: PlayerComponent
  nameComponent: NameComponent
  enemyComponent?: EnemyComponent
  attackComponent: AttackComponent
  healthComponent?: HealthComponent
  equipmentComponent?: EquipmentComponent
  dialogueComponent?: DialogueComponent
  behaviorComponent?: BehaviorComponent
}
