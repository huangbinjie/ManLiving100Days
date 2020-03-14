import { AbstractEntity } from "../../../../engine/ecs/entity";
import { PlayerComponent } from "../../components/Player";
import { HealthComponent } from "../../components/Health";
import { RepletionComponent } from "../../components/Repletion";
import { ThirstComponent } from "../../components/Thirst";

export class PlayerEntity extends AbstractEntity {
  player = new PlayerComponent()
  health = new HealthComponent(10)
  repletion = new RepletionComponent(5)
  thirst = new ThirstComponent(5)
}