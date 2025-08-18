import Component from "./component.mjs";
import Entity from "./entity.mjs";
import Position from "./position_component.mjs";

function sqDist(x1, y1, x2, y2) {
    return (x2 - x1) ** 2 + (y2 - y1) ** 2;
}

export default class Line extends Component {
    #x1; #y1; #x2; #y2; ref; length;

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
        this.recalculateLength();
    }
    /**
     * Finds the closest distance between two line segments.
     * @param {Line} other The line segment to check against.
     * @returns The closest distance.
     */
    distToSegment(other) {
        return Math.min(this.#ptDistToSegment(this.#x1 + this.ref.getX(), this.#y1 + this.ref.getY(), other),
            this.#ptDistToSegment(this.#x2 + this.ref.getX(), this.#y2 + this.ref.getY(), other));
    }
    #ptDistToSegment(ptX, ptY, other) {
        const absOtherX1 = other.#x1 + other.ref.getX();
        const absOtherY1 = other.#x1 + other.ref.getY();
        const absOtherX2 = other.#x1 + other.ref.getX();
        const absOtherY2 = other.#x1 + other.ref.getY();
        if (other.length === 0)
            return Math.sqrt(sqDist(ptX, ptY, absOtherX1, absOtherY1));

        const apx = ptX - absOtherX1;
        const apy = ptY - absOtherY1;
        const abx = other.#x2 - other.#x1;
        const aby = other.#y2 - other.#y1;
        const nearestLinePt = (apx * abx + apy * aby) / (other.length ** 2);
        if (nearestLinePt < 0) return Math.sqrt(sqDist(ptX, ptY, absOtherX1, absOtherY1));
        if (nearestLinePt > 1) return Math.sqrt(sqDist(ptX, ptY, absOtherX2, absOtherY2));
        return Math.sqrt(sqDist(ptX, ptY, absOtherX1 + nearestLinePt * abx, absOtherY1 + nearestLinePt * aby));
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
        this.recalculateLength();
        this.notify();
    }
    setY1(y) {
        this.#y1 = y;
        this.recalculateLength();
        this.notify();
    }
    setX2(x) {
        this.#x2 = x;
        this.recalculateLength();
        this.notify();
    }
    setY2(y) {
        this.#y2 = y;
        this.recalculateLength();
        this.notify();
    }
    recalculateLength() {
        this.length = Math.sqrt((this.#x2 - this.#x1) ** 2 + (this.#y2 - this.#y1) ** 2);
    }
}