import { World } from "./world";
import { LogSystem } from "@systems/log/log";
import { DialogueSystem } from "@systems/dialogue/Dialogue";
import { StageSystem } from "@systems/stage/Stage";
import { InputSystem } from "@systems/input/input";
import { WelcomeSystem } from "@systems/welcome/Welcome";
import { Welcome } from "@components/Welcome/messages/Welcome";
import { LiXiaoYao } from "@entities/characters/stage0/LiXiaoYao"

const world = new World()

world.addSystem(DialogueSystem)
world.addSystem(LogSystem)
world.addSystem(InputSystem)
world.addSystem(StageSystem)
world.addSystem(WelcomeSystem)

world.addEntity(new LiXiaoYao)
world.broadcast(new Welcome())