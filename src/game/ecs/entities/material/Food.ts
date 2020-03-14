import { FoodComponent } from "../../components/material/Food";
import { NameComponent } from "../../components/common/Name";
import { Entity } from "../Entity";

export default class FoodEntity extends Entity {
  nameComponent = new NameComponent('食物')
  foodComponent = new FoodComponent()
}
