import { World } from "world";
import { ConsoleSystem } from "@systems/console/Console";
import { StageSystem } from "@systems/stage/Stage";
import { InputSystem } from "@systems/Input/Input";
import { WelcomeSystem } from "@systems/welcome/Welcome";
import { Welcome } from "@systems/welcome/messages/Welcome";
import { LiXiaoYao } from "@entities/players/LiXiaoYao"
import { InteractionSystem } from "@systems/interaction/Interaction";
import { DialogueSystem } from "systems/dialogue/Dialogue";

const world = new World()

const consoleRef = world.addSystem(new ConsoleSystem(world))
const inputRef = world.addSystem(new InputSystem(world))
const dialogueRef = world.addSystem(new DialogueSystem(inputRef, consoleRef))

world.addSystem(new WelcomeSystem(world, inputRef, consoleRef))
const interactionRef = world.addSystem(new InteractionSystem(world, inputRef, consoleRef))
world.addSystem(new StageSystem(world, inputRef, consoleRef, dialogueRef, interactionRef))

world.broadcast(new Welcome())