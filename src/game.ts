import { World } from "world";
import { ConsoleSystem } from "@systems/console/Console";
import { StageSystem } from "@systems/stage/Stage";
import { InputSystem } from "@systems/Input/Input";
import { WelcomeSystem } from "@systems/welcome/Welcome";
import { Welcome } from "@systems/welcome/messages/Welcome";
import { LiXiaoYao } from "@entities/players/LiXiaoYao"

const world = new World()

world.addSystem(ConsoleSystem)
world.addSystem(InputSystem)
// world.addSystem(StageSystem)
world.addSystem(WelcomeSystem)

// world.addEntity(new LiXiaoYao)
world.broadcast(new Welcome())