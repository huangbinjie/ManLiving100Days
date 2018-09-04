import { IWeaponEntity } from "@entities/weapons/IWeapon";

export class EquipmentComponent implements IComponent {
  constructor(
    public weapon?: IWeaponEntity,
    // public armor
  ) { }
}