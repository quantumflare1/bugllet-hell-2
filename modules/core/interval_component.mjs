import Component from "./component.mjs";

export default class Interval extends Component {
    #interval; #time;
    #active = true;

    constructor(interval, initialDelay = interval) {
        super();
        this.#time = initialDelay;
        this.#interval = interval;
    }
    tick() {
        if (this.#active) this.#time--;
        if (this.#time === 0) {
            this.notify();
            this.#time = this.#interval;
        }
    }
    pauseInterval() {
        this.#active = false;
    }
    startInterval() {
        this.#active = true;
    }
}