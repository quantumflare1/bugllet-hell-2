import Component from "./component.mjs";
import Entity from "./entity.mjs";
import Line from "./line_component.mjs";

export default class Collider extends Component {
    line;
    #radius;

    /**
     * Creates a new Collider.
     * @param {Entity} parent The entity this component is attached to.
     * @param {number} rad The radius of this collider.
     */
    constructor(parent, rad) {
        super();
        this.#radius = rad;
        this.line = parent.getComponent(Line);
    }
    /**
     * Checks if this Collider overlaps another.
     * @param {Collider} other The collider checked against.
     */
    collidesWith(other) {
        // implement collision logic here
        const radSum = this.#radius + other.#radius;
        if (this.line.distToSegment(this.line.getX1(), this.line.getY1(), other) < radSum ||
        this.line.distToSegment(this.line.getX2(), this.line.getY2(), other) < radSum ||
        this.line.distToSegment(other.line.getX1(), other.line.getY1(), this) < radSum ||
        this.line.distToSegment(other.line.getX2(), other.line.getY2(), this) < radSum) {
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
}