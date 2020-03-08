import { AbstractComponent } from "../../../engine/ecs/component";

export class AttackComponent implements AbstractComponent {
  constructor(public value: number) { }
}