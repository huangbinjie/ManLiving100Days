import { ICharacterEntity } from "@entities/characters/ICharacter";

export class AttackInputComplete {
  constructor(public target: ICharacterEntity, public index: number) { }
}