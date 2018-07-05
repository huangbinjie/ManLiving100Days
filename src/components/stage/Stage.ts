import { IEntity } from "../../entities/IEntity";
import { IStageEntity } from "@entities/stages/IStage";
import { ICharacterEntity } from "@entities/characters/ICharacter";
import { IChestEntity } from "@entities/chests";

export class StageComponent implements IComponent {
  constructor(public items: Array<IStageEntity | ICharacterEntity | IChestEntity>) { }
}