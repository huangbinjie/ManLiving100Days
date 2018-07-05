import { IEntity } from "../IEntity"
import { NameComponent } from "../../components/name/Name"
import { HealthComponent } from "../../components/health/Health"
import { EquipmentComponent } from "@components/equipment/Equipment"
import { AttackComponent } from "@components/Attack/Attack";
import { CharacterComponent } from "@components/character/character";
import { DialogueComponent } from "@components/dialogue/Dialogue";
import { EnemyComponent } from "@components/enemy/enemy";
import { BehaviorComponent } from "@components/Behavior/Behavior";

export interface ICharacterEntity extends IEntity {
  characterComponent: CharacterComponent
  nameComponent: NameComponent
  enemyComponent?: EnemyComponent
  attackComponent?: AttackComponent
  healthComponent?: HealthComponent
  equipmentComponent?: EquipmentComponent
  dialogueComponent?: DialogueComponent
  behaviorComponent?: BehaviorComponent
}
