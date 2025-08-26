import Component from "./component.mjs";
import Entity from "./entity.mjs";

export default class Timer extends Component {
    time; parent;

    /**
     * 
     * @param {Entity} parent This component's associated entity.
     * @param {number} time The number of ticks this timer will last.
     */
    constructor(parent, time) {
        super();
        this.parent = parent;
        this.time = time;
    }
    tick() {
        this.time--;
        if (this.time === 0) {
            this.notify();
            this.parent.removeComponent(Timer);
        }
    }
}