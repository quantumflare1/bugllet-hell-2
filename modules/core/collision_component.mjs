import Component from "./component.mjs";
import Entity from "./entity.mjs";
import Line from "./line_component.mjs";

export default class Collider extends Component {
    line;
    #layer;
    #radius;
    #enabled = true;

    /**
     * Creates a new Collider.
     * @param {Entity} parent The entity this component is attached to.
     * @param {number} rad The radius of this collider.
     */
    constructor(parent, rad, layer = 0) {
        super();
        this.#radius = rad;
        this.#layer = layer;
        this.line = parent.getComponent(Line);
    }
    /**
     * Checks if this Collider overlaps another.
     * @param {Collider} other The collider checked against.
     */
    collidesWith(other) {
        // implement collision logic here
        if (!this.#enabled) return false;
        const radSum = this.#radius + other.#radius;
        if (this.line.distToSegment(other.line) < radSum) {
            this.notify();
            other.notify();

            return true;
        }
        return false;
    }
    getRadius() {
        return this.#radius;
    }
    setRadius(rad) {
        this.#radius = rad;
    }
    toggle(state) {
        this.#enabled = state;
        this.notify();
    }
    getState() {
        return this.#enabled;
    }
    getLayer() {
        return this.#layer;
    }
}