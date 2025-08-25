import Entity from "./entity.mjs";
import Position from "./position_component.mjs";

export default class TargetPosition extends Position {
    #distX;
    #distY;
    pos;

    /**
     * 
     * @param {Entity} parent 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(parent, x, y) {
        super(x, y);
        this.pos = parent.getComponent(Position);
        this.pos.addObserver(this.#calculateDistance.bind(this)); // just considered: maybe observers can do some memory leaky shit, look into this
    }
    getDistX() {
        return this.#distX;
    }
    getDistY() {
        return this.#distY;
    }
    setX(x) {
        super.setX(x);
        this.#calculateDistance();
    }
    setY(y) {
        super.setY(y);
        this.#calculateDistance();
    }
    addX(x) {
        super.addX(x);
        this.#calculateDistance();
    }
    addY(y) {
        super.addY(y);
        this.#calculateDistance();
    }
    #calculateDistance() {
        this.#distX = super.getX() - this.pos.getX();
        this.#distY = super.getY() - this.pos.getY();
    }
}