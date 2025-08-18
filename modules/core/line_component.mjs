import Component from "./component.mjs";
import Entity from "./entity.mjs";
import Position from "./position_component.mjs";

export default class Line extends Component {
    #x1; #y1; #x2; #y2; ref;

    /**
     * Creates a new Line.
     * @param {Entity} parent The Entity this component is attached to.
     * @param {number} x1 The X-coordinate of the startpoint, relative to the parent.
     * @param {number} y1 The Y-coordinate of the startpoint, relative to the parent.
     * @param {number} x2 The X-coordinate of the endpoint, relative to the parent.
     * @param {number} y2 The Y-coordinate of the endpoint, relative to the parent.
     */
    constructor(parent, x1, y1, x2, y2) {
        super();
        this.ref = parent.getComponent(Position);
        this.#x1 = x1;
        this.#x2 = x2;
        this.#y1 = y1;
        this.#y2 = y2;
    }
    getX1() {
        return this.#x1;
    }
    getY1() {
        return this.#y1;
    }
    getX2() {
        return this.#x2;
    }
    getY2() {
        return this.#y2;
    }
    setX1(x) {
        this.#x1 = x;
    }
    setY1(y) {
        this.#y1 = y;
    }
    setX2(x) {
        this.#x2 = x;
    }
    setY2(y) {
        this.#y2 = y;
    }
}