import { IEntity } from "@entities/IEntity"
import { NameComponent } from "@components/Name"
import { HealthComponent } from "@components/Health"
import { EquipmentComponent } from "@components/Equipment"
import { AttackComponent } from "@components/Attack";
import { CharacterComponent } from "@components/character";
import { DialogueComponent } from "@components/Dialogue";
import { EnemyComponent } from "@components/Enemy";
import { BehaviorComponent } from "@components/Behavior";

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
