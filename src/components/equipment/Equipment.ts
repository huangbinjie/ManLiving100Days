import { AbstractWeaponEntity } from "entities/weapons/AbstractWeapon";

export class EquipmentComponent implements IComponent {
  constructor(
    public weapon?: AbstractWeaponEntity,
    // public armor
  ) { }
}