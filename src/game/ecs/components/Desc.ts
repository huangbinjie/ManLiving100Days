import { AbstractComponent } from "../../../engine/ecs/component";

export class DescComponent implements AbstractComponent {
  constructor(public value: string) { }
}