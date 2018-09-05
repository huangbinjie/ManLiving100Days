import { World } from "world";
import { ConsoleSystem } from "@systems/console/Console";
import { StageSystem } from "@systems/stage/Stage";
import { InputSystem } from "@systems/Input/Input";
import { WelcomeSystem } from "@systems/welcome/Welcome";
import { Welcome } from "@systems/welcome/messages/Welcome";
import { LiXiaoYao } from "@entities/players/LiXiaoYao"
import { InteractionSystem } from "@systems/interaction/Interaction";

const world = new World()

const consoleRef = world.addSystem(new ConsoleSystem(world))
const inputRef = world.addSystem(new InputSystem(world))

world.addSystem(new WelcomeSystem(world, inputRef, consoleRef))
const interactionRef = world.addSystem(new InteractionSystem(world, inputRef, consoleRef))
world.addSystem(new StageSystem(world, inputRef, consoleRef, interactionRef))

world.broadcast(new Welcome())