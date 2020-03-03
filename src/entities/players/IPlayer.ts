import { IEntity } from "@entities/IEntity"
import { NameComponent } from "@components/Name"
import { HealthComponent } from "@components/Health"
import { EquipmentComponent } from "@components/Equipment"
import { AttackComponent } from "@components/Attack";
import { DialogueComponent } from "@components/Dialogue";
import { EnemyComponent } from "@components/Enemy";
import { BehaviorComponent } from "@components/Behavior";
import { PlayerComponent } from "@components/Player";

export interface IPlayerEntity extends IEntity {
  playerComponent: PlayerComponent
  nameComponent: NameComponent
  enemyComponent?: EnemyComponent
  attackComponent: AttackComponent
  healthComponent: HealthComponent
  equipmentComponent?: EquipmentComponent
  dialogueComponent?: DialogueComponent
  behaviorComponent: BehaviorComponent
}
