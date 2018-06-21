import { AbstractWeaponEntity } from "../weapons/AbstractWeapon"
import { IEntity } from "../IEntity"
import { NameComponent } from "../../components/Name"
import { HealthComponent } from "../../components/Health"
import { EquipmentComponent } from "@components/Equipment";

export abstract class AbstractCharacterEntity implements IEntity {
  public abstract nameComponent: NameComponent
  public abstract healthComponent: HealthComponent
  public abstract equipmentComponent: EquipmentComponent
}
