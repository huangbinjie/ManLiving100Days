import { ICharacterEntity } from "@entities/characters/ICharacter";
import { IStageEntity } from "@entities/stages/IStage";

export class With {
  constructor(public entity: ICharacterEntity | IStageEntity) { }
}