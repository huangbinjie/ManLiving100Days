// import { AbstractActor } from "js-actor";
// import { World } from "../../world";
// import { HomeStage } from "../home/home";

// export class LoadingStage extends AbstractActor {
//   createReceive() {
//     return this.receiveBuilder()
//       .match(Main, async () => {
//         World.instance.renderer.writeTitle('过了一天')

//         World.instance.renderer.writeLine(`目前存活天数: ${++World.instance.liveDays}`)

//         await World.instance.renderer.writeMenus(['继续'], 'column')

//         World.instance.changeStage(new HomeStage())
//       })
//       .build()
//   }
// }

// class Main { }