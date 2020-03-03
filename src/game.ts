import { World } from "world";
import { ConsoleSystem } from "@systems/console/Console";
import { StageSystem } from "@systems/stage/Stage";
import { InputSystem } from "@systems/Input/Input";
import { WelcomeSystem } from "@systems/welcome/Welcome";
import { Welcome } from "@systems/welcome/messages/Welcome";
import { InteractionSystem } from "@systems/interaction/Interaction";
import { DialogueSystem } from "@systems/dialogue/Dialogue";
import { BattleSystem } from "@systems/attack/Battle";

const world = new World()

const consoleRef = world.addSystem(new ConsoleSystem(world))
const inputRef = world.addSystem(new InputSystem(world))

const welcomeRef = world.addSystem(new WelcomeSystem(world, inputRef, consoleRef))
const interactionRef = world.addSystem(new InteractionSystem(world, inputRef, consoleRef))
const dialogueRef = world.addSystem(new DialogueSystem(world, inputRef, consoleRef))
const battleRef = world.addSystem(new BattleSystem(world, inputRef, consoleRef))
world.addSystem(new StageSystem(world, inputRef, consoleRef, dialogueRef, interactionRef, battleRef))

world.broadcast(new Welcome())