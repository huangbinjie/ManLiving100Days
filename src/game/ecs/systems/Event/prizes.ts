import FoodEntity from "../../entities/material/Food";
import WaterEntity from "../../entities/material/Water";
import { Entity } from "../../entities/Entity";

export type Prize = new () => Entity

const prizes: Prize[] = [
  FoodEntity,
  WaterEntity
]

export default prizes
