class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (time == undefined || callback == undefined) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    // проверить метод поиска
    if (this.alarmCollection.find((item) => item.time == time)) {
      console.warn("Уже присутствует звонок на это же время");
    }

    this.alarmCollection.push({
      callback,
      time,
      canCall: true,
    });
  }

  removeClock(time) {
    this.alarmCollection.find((item) => {
      if (item.time == time) {
        delete this.alarmCollection.item;
      }
    });
  }

  getCurrentFormattedTime() {
    let getTime = new Date();
    return String(getTime.getHours() + ":" + getTime.getMinutes());
  }

  start() {
    if (this.intervalId == null) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((item) => {
        if (this.getCurrentFormattedTime == item.time && item.canCall == true) {
          item.canCall = false;
          callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval();
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((item) => (item.canCall = true));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
