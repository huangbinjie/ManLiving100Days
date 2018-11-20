import { ICharacterEntity } from "@entities/characters/ICharacter";
import { CharacterComponent } from "@components/character";
import { NameComponent } from "@components/Name";
import { AttackComponent } from "@components/Attack";
import { HealthComponent } from "@components/Health";
import { EquipmentComponent } from "@components/Equipment";
import { DialogueComponent } from "@components/Dialogue";
import { BehaviorComponent } from "@components/Behavior";
import { EnemyComponent } from "components/Enemy";

/**
 * 罗刹鬼婆
 */
export class LuoChaGuiPo implements ICharacterEntity {
  public characterComponent = new CharacterComponent()
  public enemyComponent = new EnemyComponent()
  public nameComponent = new NameComponent("罗刹鬼婆")
  public attackComponent = new AttackComponent(50)
  public healthComponent = new HealthComponent(100000)
  public equipmentComponent = new EquipmentComponent()
  public dialogueComponent = new DialogueComponent(dialogs)
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