import { AbstractComponent } from "../../../engine/ecs/component";

export class NameComponent implements AbstractComponent {
  constructor(public value: string) { }
}