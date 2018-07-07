import { IMenuEntity } from "@entities/menus/IMenu";

export function menu(args: IMenuEntity[]) {
  const str = args.map((arg, index) => ++index + "、" + arg.nameComponent.value).join("\n")
  console.log('\x1b[36m%s\x1b[0m', str)
}