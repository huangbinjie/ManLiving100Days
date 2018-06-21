import { AbstractWeapon } from "entities/weapons/AbstractWeapon";

export class EquipmentComponent implements IComponent {
  constructor(
    public weapon: AbstractWeapon,
    // public armor
  ) { }
}