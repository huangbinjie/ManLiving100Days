import { IEntity } from "../IEntity"
import { NameComponent } from "../../components/name/Name"
import { HealthComponent } from "../../components/health/Health"
import { EquipmentComponent } from "@components/equipment/Equipment"
import { AttackComponent } from "@components/Attack/Attack";
import { CharacterComponent } from "@components/character/character";

export interface ICharacterEntity extends IEntity {
  characterComponent: CharacterComponent
  nameComponent: NameComponent
  attackComponent?: AttackComponent
  healthComponent?: HealthComponent
  equipmentComponent?: EquipmentComponent
}
