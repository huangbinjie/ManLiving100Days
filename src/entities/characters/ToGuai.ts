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
export class TuGuai implements ICharacterEntity {
  public characterComponent = new CharacterComponent()
  public nameComponent = new NameComponent("土怪")
}