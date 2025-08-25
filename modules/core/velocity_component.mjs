import Component from "./component.mjs";
import Entity from "./entity.mjs";
import Position from "./position_component.mjs";
import Vector from "./vector.mjs";

export default class Velocity extends Component {
    pos; 
    #vel;

    /**
     * Creates a new Velocity.
     * @param {Entity} parent The entity this component is attached to.
     * @param {number} x The starting velocity along the x-axis.
     * @param {number} y The starting velocity along the y-axis.
     */
    constructor(parent, x = 0, y = 0) {
        super();
        this.pos = parent.getComponent(Position);
        this.#vel = new Vector(x, y);
    }
    tick() {
        this.pos.addX(this.#vel.getX());
        this.pos.addY(this.#vel.getY());
    }
    getX() {
        return this.#vel.getX();
    }
    getY() {
        return this.#vel.getY();
    }
    addX(x) {
        this.#vel = this.#vel.add(new Vector(x, 0));
        this.notify();
    }
    addY(y) {
        this.#vel = this.#vel.add(new Vector(0, y));
        this.notify();
    }
    setX(x) {
        this.#vel = new Vector(x, this.#vel.getY());
        this.notify();
    }
    setY(y) {
        this.#vel = new Vector(this.#vel.getX(), y);
        this.notify();
    }
}