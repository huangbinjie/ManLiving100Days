import { IEntity } from "@entities/IEntity";
import { IStageEntity } from "@entities/stages/IStage";
import { ICharacterEntity } from "@entities/characters/ICharacter";

export class StageComponent implements IComponent {
  constructor(public items: Array<IStageEntity | ICharacterEntity>) { }
}