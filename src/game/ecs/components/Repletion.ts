import { AbstractComponent } from "../../../engine/ecs/component";
import { UnexpectValueError } from "../../utils/errors";

// 饱食度
export class RepletionComponent implements AbstractComponent {
  constructor(public value: number) { }

  toString() {
    // 饱腹，充实，正常，饥饿，非常饿

    if (this.value === 5) {
      return '饱腹'
    }

    if (this.value === 4) {
      return '充实'
    }

    if (this.value === 3) {
      return '正常'
    }

    if (this.value === 2) {
      return '饥饿'
    }

    if (this.value === 1) {
      return '非常饿'
    }

    if (this.value === 0) {
      return '空腹'
    }

    throw UnexpectValueError()
  }
}