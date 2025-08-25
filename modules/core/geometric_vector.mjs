import Vector from "./vector.mjs";

export default class GeometricVector {
    #length; #angle;

    constructor(l, a) {
        if (l < 0) {
            this.#length = -l;
            this.#angle = a + Math.PI;
        }
        else {
            this.#length = l;
            this.#angle = a;
        }
    }
    getLength() {
        return this.#length;
    }
    getAngle() {
        return this.#angle;
    }
    /**
     * Adds two vectors.
     * @param {GeometricVector} v The other vector.
     */
    add(v) {
        const innerAngle = this.#angle - v.#angle;
        const cosLaw = Math.sqrt(this.#length ** 2 + v.#length ** 2 - 2 * this.#length * v.#length * Math.cos(innerAngle));
        const sinLaw = Math.asin(v.#length * Math.sin(innerAngle) / cosLaw);
        return new GeometricVector(cosLaw, sinLaw);
    }
    /**
     * Multiplies a vector by a scalar.
     * @param {number} n The scalar.
     */
    multiply(n) {
        return new GeometricVector(this.#length * n, this.#angle);
    }
    /**
     * Obtains the dot product of two vectors.
     * @param {GeometricVector} v The other vector.
     */
    dot(v) {
        return this.#length * v.#length * Math.cos(this.#angle - v.#angle);
    }
    normalize() {
        return new GeometricVector(1, this.#angle);
    }
    toAlgebraic() {
        const x = this.#length * Math.cos(this.#angle);
        const y = this.#length * Math.sin(this.#angle);
        return new Vector(x, y);
    }
}