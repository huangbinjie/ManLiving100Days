import { WaterComponent } from "../../components/material/Water";
import { NameComponent } from "../../components/common/Name";
import { Entity } from "../Entity";

export default class WaterEntity extends Entity {
  nameComponent = new NameComponent('水')
  waterComponent = new WaterComponent()
}
