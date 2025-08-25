import GeometricVector from "./geometric_vector.mjs";

export default class Vector {
    #x; #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }
    getX() {
        return this.#x;
    }
    getY() {
        return this.#y;
    }
    /**
     * Adds two vectors.
     * @param {Vector} v The other vector.
     */
    add(v) {
        return new Vector(this.#x + v.#x, this.#y + v.#y);
    }
    /**
     * Multiplies a vector by a scalar.
     * @param {number} n The scalar.
     */
    multiply(n) {
        return new Vector(this.#x * n, this.#y * n);
    }
    /**
     * Obtains the dot product of two vectors.
     * @param {Vector} v The other vector.
     */
    dot(v) {
        return this.#x * v.#x + this.#y * v.#y;
    }
    normalize() {
        const length = Math.sqrt(this.#x ** 2 + this.#y ** 2);
        return new Vector(this.#x / length, this.#y / length);
    }
    toGeometric() {
        const length = Math.sqrt(this.#x ** 2 + this.#y ** 2);
        const angle = this.#x > 0 ? Math.asin(this.#y / length) : Math.PI - Math.asin(this.#y / length);

        return new GeometricVector(length, angle);
    }
}