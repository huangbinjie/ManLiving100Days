import { PlayerComponent } from "@components/player/Player"
import { NameComponent } from "@components/name/Name"
import { HealthComponent } from "@components/health/Health"
import { AttackComponent } from "@components/Attack/Attack"
import { ICharacterEntity } from "@entities/characters/ICharacter";
import { CharacterComponent } from "@components/character/character";
import { DialogueComponent } from "@components/dialogue/Dialogue";
import { BehaviorComponent } from "@components/Behavior/Behavior";
import { StartDialogue } from "@components/dialogue/messages/StartDialogue";

/**
 * 第0幕 - 土怪
 */
export class TuGuai implements ICharacterEntity {
  public characterComponent = new CharacterComponent()
  public nameComponent = new NameComponent("土怪")
  public dialogComponent = new DialogueComponent(dialogs)
  public behaviorComponent: BehaviorComponent

  constructor() {
    this.behaviorComponent = new BehaviorComponent(new StartDialogue(this.dialogComponent.dialogues))
  }
}

const dialogs = [
  "土怪：嘿～跑得了和尚跑不了庙，你们能往哪里逃？",
  "李逍遥：剑仙请留步！",
  "李逍遥：好妖怪！旁人见到我逃之尚且不及，你居然自己送上门来！",
  "土怪：大仙剑下留情～小妖此来，想向大仙相借纯阳神剑一使！",
  "李逍遥：笑话！本大侠全仗此剑降妖除魔，将纯阳剑借你，如何剿灭你这批妖邪？你以为将我兵器骗走，就能侥幸免于难吗？",
  "土怪：千万别误会～小妖绝非心存侥幸，敢对大仙欺瞒。只因熟知大仙除魔一向只诛元凶首恶，相信不会为难小妖。",
  "土怪：况且大仙玄功通神，早已不必凭借兵器的锋利。再寻常的剑让您使来，也是鬼神辟易！"
]