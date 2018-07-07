import { IMenuEntity } from "@entities/menus/IMenu";
import { IStageEntity } from "@entities/stages/IStage";
import { IEntity } from "@entities/IEntity";

export function menu(args: IMenuEntity[]) {
  const str = args.map((arg, index) => ++index + "、" + arg.nameComponent.value).join("\n")
  console.log('\x1b[36m%s\x1b[0m', str)
}

export function stage(stage: IStageEntity) {
  const str = `
  地点：${stage.nameComponent.value}\n
  描述：${stage.descComponent.value}\n
  这有：${getItemName(stage.stageComponent.items).join("  ")}
`
  console.log('\x1b[36m%s\x1b[0m', str)
}

function getItemName(items: IEntity[]) {
  return items.map((item, index) => `${index + 1}.${item.nameComponent.value}`)
}