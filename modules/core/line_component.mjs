import Component from "./component.mjs";
import Entity from "./entity.mjs";
import Position from "./position_component.mjs";
import Vector from "./vector.mjs";

function sqDist(x1, y1, x2, y2) {
    return (x2 - x1) ** 2 + (y2 - y1) ** 2;
}

export default class Line extends Component {
    ref; length;
    #start; #end;

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
        this.#start = new Vector(x1, y1);
        this.#end = new Vector(x2, y2);
        this.recalculateLength();
    }
    /**
     * Finds the closest distance between two line segments.
     * @param {Line} other The line segment to check against.
     * @returns The closest distance.
     */
    distToSegment(other) {
        return Math.min(this.#ptDistToSegment(this.#start.getX() + this.ref.getX(), this.#start.getY() + this.ref.getY(), other),
            this.#ptDistToSegment(this.#end.getX() + this.ref.getX(), this.#end.getY() + this.ref.getY(), other));
    }
    /**
     * 
     * @param {number} ptX 
     * @param {number} ptY 
     * @param {Line} other 
     * @returns 
     */
    #ptDistToSegment(ptX, ptY, other) {
        const absOtherX1 = other.#start.getX() + other.ref.getX();
        const absOtherY1 = other.#start.getY() + other.ref.getY();
        const absOtherX2 = other.#end.getX() + other.ref.getX();
        const absOtherY2 = other.#start.getY() + other.ref.getY();
        if (other.length === 0)
            return Math.sqrt(sqDist(ptX, ptY, absOtherX1, absOtherY1));

        const apx = ptX - absOtherX1;
        const apy = ptY - absOtherY1;
        const abx = other.#end.getX() - other.#start.getX();
        const aby = other.#end.getY() - other.#start.getY();
        const nearestLinePt = (apx * abx + apy * aby) / (other.length ** 2);
        if (nearestLinePt < 0) return Math.sqrt(sqDist(ptX, ptY, absOtherX1, absOtherY1));
        if (nearestLinePt > 1) return Math.sqrt(sqDist(ptX, ptY, absOtherX2, absOtherY2));
        return Math.sqrt(sqDist(ptX, ptY, absOtherX1 + nearestLinePt * abx, absOtherY1 + nearestLinePt * aby));
    }
    getStartX() {
        return this.#start.getX();
    }
    getStartY() {
        return this.#start.getY();
    }
    getEndX() {
        return this.#end.getX();
    }
    getEndY() {
        return this.#end.getY();
    }
    recalculateLength() {
        this.length = Math.sqrt((this.#end.getX() - this.#start.getX()) ** 2 + (this.#end.getY() - this.#start.getY()) ** 2);
    }
}