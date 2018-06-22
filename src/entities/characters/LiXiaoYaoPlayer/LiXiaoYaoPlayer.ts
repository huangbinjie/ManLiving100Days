import { AbstractCharacterEntity } from "../..";
import { PlayerComponent } from "@components/player/Player";
import { NameComponent } from "@components/name/Name";
import { HealthComponent } from "@components/health/Health";
import { EquipmentComponent } from "@components/equipment/Equipment";
import { RustySwordEntity } from "@entities/weapons/sword/RustySword/RustySword";

export class LiXiaoYaoPlayer extends AbstractCharacterEntity {
  public playerComponent = new PlayerComponent()
  public nameComponent = new NameComponent("李逍遥")
  public healthComponent = new HealthComponent(100)
  public equipmentComponent = new EquipmentComponent(new RustySwordEntity())
}