import { IEntity } from "@entities/IEntity";
import { ICharacterEntity } from "@entities/characters/ICharacter";
import { IStageEntity } from "@entities/stages/IStage";

export function isCharacter(entity: IEntity): entity is ICharacterEntity {
  return "characterComponent" in entity
}

export function isStage(entity: IEntity): entity is IStageEntity {
  return "stageComponent" in entity
}