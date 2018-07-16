import { ICharacterEntity } from "@entities/characters/ICharacter";

export class NextDialogue {
  constructor(public character: ICharacterEntity, public currentIndex: number) { }
}