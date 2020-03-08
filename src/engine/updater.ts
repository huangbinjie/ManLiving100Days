export class Updater {
  private timer?: NodeJS.Timeout
  private tasks: Array<() => void> = []

  constructor(private period = 60) { }

  addTask(task: () => void) {
    this.tasks.push(task)
  }

  run() {
    if (this.period >= 10) {
      this.timer = setInterval(() => {
        for (const task of this.tasks) {
          task()
        }
      }, this.period)
    }

    for (const task of this.tasks) {
      task()
    }
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}