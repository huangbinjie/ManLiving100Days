import { AbstractComponent } from "../../../engine/ecs/component";
import { UnexpectValueError } from "../../utils/errors";

// 口渴度
export class ThirstComponent implements AbstractComponent {
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
      return '口渴'
    }

    if (this.value === 1) {
      return '非常渴'
    }

    if (this.value === 0) {
      return '缺水'
    }

    throw UnexpectValueError()
  }
}
