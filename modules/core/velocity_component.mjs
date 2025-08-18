import Component from "./component.mjs";
import Entity from "./entity.mjs";
import Position from "./position_component.mjs";

export default class Velocity extends Component {
    pos; 
    #x; #y;

    /**
     * Creates a new Velocity.
     * @param {Entity} parent The entity this component is attached to.
     * @param {number} x The starting velocity along the x-axis.
     * @param {number} y The starting velocity along the y-axis.
     */
    constructor(parent, x = 0, y = 0) {
        super();
        this.pos = parent.getComponent(Position);
        this.#x = x;
        this.#y = y;
    }
    tick() {
        this.pos.addX(this.#x);
        this.pos.addY(this.#y);
    }
    getX() {
        return this.#x;
    }
    getY() {
        return this.#y;
    }
    addX(x) {
        this.#x += x;
        this.notify();
    }
    addY(y) {
        this.#y += y;
        this.notify();
    }
    setX(x) {
        this.#x = x;
        this.notify();
    }
    setY(y) {
        this.#y = y;
        this.notify();
    }
}