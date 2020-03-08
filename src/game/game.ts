import { World, WorldInited } from "./world"
import { WelcomeStage } from "./stages/welcome/welcome"
import { Game } from "../engine/game"
import { StageManager } from "../engine/stage/manager"

const world = new World()

const game = new Game({ world })

StageManager.of(world).to(new WelcomeStage())

game.run()
