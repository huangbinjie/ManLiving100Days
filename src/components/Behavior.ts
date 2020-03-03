export class BehaviorComponent {
  public beforeTalk?: object
  public afterTalk?: object
  public beforeBattle?: object
  public afterBattle?: object
  public afterDied?: object
  constructor(behavior: {
    beforeTalk?: object,
    afterTalk?: object,
    beforeBattle?: object,
    afterBattle?: object,
    afterDied?: object
  }) {
    return behavior
  }
}