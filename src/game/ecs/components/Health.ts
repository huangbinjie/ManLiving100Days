import { AbstractComponent } from "../../../engine/ecs/component";

export class HealthComponent implements AbstractComponent {
  constructor(public value: number) { }
}