import { World } from "./world"
import { WelcomeStage } from "./stages/welcome"
import { Game } from "../engine/game"
import { StageManager } from "../engine/stage/manager"
import { Updater } from "../engine/updater"

const world = new World()
const updater = new Updater(0)

const game = new Game({ world, updater })

StageManager.of(world).to(new WelcomeStage())

game.run()
