import { AbstractWeaponEntity } from "../weapons/AbstractWeapon"
import { IEntity } from "../IEntity"
import { NameComponent } from "../../components/name/Name"
import { HealthComponent } from "../../components/health/Health"
import { EquipmentComponent } from "@components/equipment/Equipment"

export abstract class AbstractCharacterEntity implements IEntity {
  public abstract nameComponent: NameComponent
  public abstract healthComponent: HealthComponent
  public abstract equipmentComponent: EquipmentComponent
}
