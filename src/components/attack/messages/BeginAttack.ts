import { IEntity } from "@entities/IEntity";
import { ICharacterEntity } from "@entities/characters/ICharacter";

export class BeginAttack {
  constructor(
    public target: ICharacterEntity
  ) { }
}