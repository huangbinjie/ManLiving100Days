import { IMenuEntity } from "@entities/menus/IMenu";

export class DescribeMenus {
  constructor(public menus: IMenuEntity[]) { }
}