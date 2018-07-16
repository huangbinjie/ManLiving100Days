import { ICharacterEntity } from "@entities/characters/ICharacter";

export class WaitingAttackInput {
  constructor(public target: ICharacterEntity) { }
} 