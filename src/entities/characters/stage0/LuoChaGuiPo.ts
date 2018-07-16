import { PlayerComponent } from "@components/player/Player"
import { NameComponent } from "@components/name/Name"
import { HealthComponent } from "@components/health/Health"
import { EquipmentComponent } from "@components/equipment/Equipment"
import { AttackComponent } from "@components/Attack/Attack"
import { ICharacterEntity } from "@entities/characters/ICharacter";
import { CharacterComponent } from "@components/character/character";
import { BehaviorComponent } from "@components/Behavior/Behavior";
import { DialogueComponent } from "@components/dialogue/Dialogue";
import { BeginAttack } from "@components/attack/messages/BeginAttack";

/**
 * 罗刹鬼婆
 */
export class LuoChaGuiPo implements ICharacterEntity {
  public characterComponent = new CharacterComponent()
  public nameComponent = new NameComponent("罗刹鬼婆")
  public attackComponent = new AttackComponent(50)
  public healthComponent = new HealthComponent(100000)
  public equipmentComponent = new EquipmentComponent()
  public dialogueComponent = new DialogueComponent(dialogs)
  public behaviorComponent: BehaviorComponent

  constructor() {
    this.behaviorComponent = new BehaviorComponent(new BeginAttack(this))
  }
}

const dialogs = [
  "罗刹鬼婆：哼～小子！你谁不好惹，居然欺到老娘头上来了！",
  "李逍遥：乱世妖孽，人人得而诛之！今日本大仙专程来替天行道。",
  "罗刹鬼婆：咈咈咈，你若想死，不怕没鬼可以做…",
  "李逍遥：邪魔歪道～我与你势不两立。",
  "罗刹鬼婆：李逍遥！纳命来～～",
  "李逍遥：哇哇～作恶多端的罗刹鬼婆！既然落在你的手里，要杀要剐不用多说！",
  "李逍遥：动手吧～十八年后，又是一条好汉！",
]