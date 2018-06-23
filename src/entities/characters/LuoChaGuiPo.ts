import { PlayerComponent } from "@components/player/Player"
import { NameComponent } from "@components/name/Name"
import { HealthComponent } from "@components/health/Health"
import { EquipmentComponent } from "@components/equipment/Equipment"
import { RustySwordEntity } from "@entities/weapons/sword/RustySword/RustySword"
import { AttackComponent } from "@components/Attack/Attack"
import { ICharacterEntity } from "@entities/characters/ICharacter";
import { CharacterComponent } from "@components/character/character";

/**
 * 罗刹鬼婆
 */
export class LuoChaGuiPo implements ICharacterEntity {
  public playerComponent = new PlayerComponent()
  public characterComponent = new CharacterComponent()
  public nameComponent = new NameComponent("罗刹鬼婆")
  public attackComponent = new AttackComponent(50)
  public healthComponent = new HealthComponent(100000)
  public equipmentComponent = new EquipmentComponent()
}