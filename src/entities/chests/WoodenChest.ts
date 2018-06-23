import { BonusComponent } from "@components/Bonus/Bonus";
import { ChestComponent } from "@components/Chest/Chest";
import { NameComponent } from "@components/name/Name";
import { DescComponent } from "@components/desc/Desc";
import { IChestEntity } from "@entities/chests/IChest";

export class WoodenChestEntity implements IChestEntity {
  public chestComponent = new ChestComponent()
  public nameComponent = new NameComponent("木箱")
  public descComponent = new DescComponent("破破烂烂的，别期待出好东西，不过也有例外。")
  constructor(public bonusComponent: BonusComponent) { }
}