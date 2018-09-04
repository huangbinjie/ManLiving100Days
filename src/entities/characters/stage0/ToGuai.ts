import { NameComponent } from "@components/Name"
import { ICharacterEntity } from "@entities/characters/ICharacter";
import { CharacterComponent } from "@components/character";
import { DialogueComponent } from "@components/Dialogue";

/**
 * 第0幕 - 土怪
 */
export class TuGuai implements ICharacterEntity {
  public characterComponent = new CharacterComponent()
  public nameComponent = new NameComponent("土怪")
  public dialogueComponent = new DialogueComponent(dialogs)
}

const dialogs = [
  "李逍遥：嘿～跑得了和尚跑不了庙，你们能往哪里逃？",
  "土怪：剑仙请留步！",
  "李逍遥：好妖怪！旁人见到我逃之尚且不及，你居然自己送上门来！",
  "土怪：大仙剑下留情～小妖此来，想向大仙相借纯阳神剑一使！",
  "李逍遥：笑话！本大侠全仗此剑降妖除魔，将纯阳剑借你，如何剿灭你这批妖邪？你以为将我兵器骗走，就能侥幸免于难吗？",
  "土怪：千万别误会～小妖绝非心存侥幸，敢对大仙欺瞒。只因熟知大仙除魔一向只诛元凶首恶，相信不会为难小妖。",
  "土怪：况且大仙玄功通神，早已不必凭借兵器的锋利。再寻常的剑让您使来，也是鬼神辟易！",
  "李逍遥：看你甘冒凶险现身找我，想必另有别情。你要借纯阳神剑何用？",
  "土怪：小妖所居地穴，出了一只血角青龙，日夜喷吐阴寒毒火，小妖斗胆借剑，便是想要除此大患！",
  "李逍遥：哈哈哈～这你早说嘛！等我除掉罗刹鬼婆，索性帮你灭了那条青龙。",
  "土怪：若蒙大仙允可借剑一用，已然是天大的恩德，不敢劳您大驾了～～",
  "土怪：…………",
  "李逍遥：哼！你为何笑得如此狡猾？莫非想要诓我？",
  "土怪：那毒妇就在前面不远处，希望剑仙早日为民除害！",
  "李逍遥：看他奸笑的样子，莫非我被骗了～堂堂大仙如果上当，那可糗了…",
  "罗刹鬼婆：哼～小子！你谁不好惹，居然欺到老娘头上来了！",
  "李逍遥：乱世妖孽，人人得而诛之！今日本大仙专程来替天行道。",
  "罗刹鬼婆：咈咈咈，你若想死，不怕没鬼可以做…",
  "李逍遥：邪魔歪道～我与你势不两立。",
  "罗刹鬼婆：李逍遥！纳命来～～",
  "李逍遥：哇哇～作恶多端的罗刹鬼婆！既然落在你的手里，要杀要剐不用多说！",
  "李逍遥：动手吧～十八年后，又是一条好汉！",
]