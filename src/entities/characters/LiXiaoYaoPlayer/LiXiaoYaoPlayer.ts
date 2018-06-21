import { AbstractCharacter } from "../..";
import { NameComponent } from "../../../components/Name";
import { HealthComponent } from "../../../components/Health";
import { EquipmentComponent } from "@components/Equipment";
import { RustySwordEntity } from "../../weapons/sword/RustySword/RustySword";
import { PlayerComponent } from "@components/Player";

export class LiXiaoYaoPlayer extends AbstractCharacter {
  public playerComponent = new PlayerComponent()
  public nameComponent = new NameComponent("李逍遥")
  public healthComponent = new HealthComponent(100)
  public equipmentComponent = new EquipmentComponent(new RustySwordEntity())
}