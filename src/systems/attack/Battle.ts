import { AbstractActor, ActorRef } from "js-actor";
import { BeginBattle } from "@systems/attack/messages/BeginBattle";
import { World } from "world";
import { InputSystem } from "@systems/Input/Input";
import { ConsoleSystem } from "@systems/console/Console";
import { WaitingInput } from "@systems/input/messages/WaitingInput";
import { BattleAttackMenuEntity } from "@entities/menus/battle/Attack";
import { BehaviorComponent } from "@components/Behavior";
import { Attack } from "@systems/attack/messages/Attack";
import { DescribeInfo } from "@systems/console/messages/DescribeInfo";
import { Wait } from "@systems/attack/messages/Wait";
import { IPlayerEntity } from "@entities/players/IPlayer";
import { ICharacterEntity } from "@entities/characters/ICharacter";

export class BattleSystem extends AbstractActor {
  constructor(
    private world: World,
    private inputRef: ActorRef<InputSystem>,
    private consoleRef: ActorRef<ConsoleSystem>,
  ) {
    super()
  }
  public createReceive() {
    return this.receiveBuilder()
      .match(BeginBattle, async () => {
        this.getSelf().tell(new Wait)
      })
      .match(Attack, () => {
        const player = this.world.getPlayer()
        const enemy = this.world.getEnemy()
        enemy.healthComponent!.value -= player.attackComponent.value
        this.consoleRef.tell(new DescribeInfo(`你对${enemy.nameComponent.value}造成了${player.attackComponent.value}点伤害`))
        player.healthComponent!.value -= enemy.attackComponent!.value
        this.consoleRef.tell(new DescribeInfo(`${enemy.nameComponent.value}对你造成了${enemy.attackComponent!.value}点伤害`))
        this.checkBehavior(player, enemy)
      })
      .match(Wait, async () => {
        const battleMenus = [new BattleAttackMenuEntity()]
        const index = await this.inputRef.ask(new WaitingInput("\n接下来要怎么做\n"))
        const behavior = battleMenus[index]
        switch (true) {
          case behavior instanceof BattleAttackMenuEntity:
            this.getSelf().tell(new Attack)
            break;
        }
      })
      .build()
  }

  private checkBehavior(player: IPlayerEntity, enemy: ICharacterEntity) {
    if (player.healthComponent.value <= 0) {
      if (player.behaviorComponent.afterBattle) {
        this.world.broadcast(player.behaviorComponent.afterBattle)
      }
      if (player.behaviorComponent.afterDied) {
        this.world.broadcast(player.behaviorComponent.afterDied)
      }
    }
  }
}