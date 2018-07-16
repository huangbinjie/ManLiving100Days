import { ICharacterEntity } from "@entities/characters/ICharacter";

export class WaitingConfirmNextDialogue {
  constructor(public character: ICharacterEntity, public currentIndex: number) { }
}