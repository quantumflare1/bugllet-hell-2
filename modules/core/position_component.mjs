import Component from "./component.mjs";

export default class Position extends Component {
    #x; #y;

    constructor(x, y) {
        super();
        this.#x = x;
        this.#y = y;
    }
    setX(x) {
        this.#x = x;
        this.notify();
    }
    setY(y) {
        this.#y = y;
        this.notify();
    }
    addX(x) {
        this.#x += x;
        this.notify();
    }
    addY(y) {
        this.#y += y;
        this.notify();
    }
    getX() {
        return this.#x;
    }
    getY() {
        return this.#y;
    }
}