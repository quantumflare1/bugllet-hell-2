import Component from "./component.mjs";
import Vector from "./vector.mjs";

export default class Position extends Component {
    #vec;

    constructor(x, y) {
        super();
        this.#vec = new Vector(x, y);
    }
    setX(x) {
        this.#vec = new Vector(x, this.#vec.getY());
        this.notify();
    }
    setY(y) {
        this.#vec = new Vector(this.#vec.getX(), y);
        this.notify();
    }
    addX(x) {
        this.#vec = this.#vec.add(new Vector(x, 0));
        this.notify();
    }
    addY(y) {
        this.#vec = this.#vec.add(new Vector(0, y));
        this.notify();
    }
    getX() {
        return this.#vec.getX();
    }
    getY() {
        return this.#vec.getY();
    }
}