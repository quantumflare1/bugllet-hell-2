import Renderable from "./render_component.mjs";

/**
 * @callback cb
 */

export default class RenderList {
    #values = [];
    length = 0;

    /**
     * Adds a new element to this list.
     * @param {Renderable} element The element to add.
     * @returns The new length of the list.
     */
    add(element) {
        if (this.length === 0) {
            this.#values[0] = element;
            return ++this.length;
        }
        let l = 0;
        let r = this.length;

        console.log("added")
        while (true) {
            let mid = (l + r) >> 1;
            console.log(mid)
            if (element.z < this.#values[mid].z)
                r = mid;
            else if (element.z > this.#values[mid].z)
                l = mid;
            else {
                this.#values.splice(mid, 0, element);
                break;
            }
            if (mid === this.length - 1) {
                this.#values.push(element);
                break;
            }
            else if (mid === 0) {
                this.#values.splice(0, 0, element);
                break;
            }
        }
        return ++this.length;
    }
    /**
     * Removes an element from this list.
     * @param {Renderable} element The removed element.
     * @returns The new length of the list.
     */
    delete(element) {
        let l = 0;
        let r = this.length;

        while (true) {
            let mid = (l + r) >> 1;
            if (element.z < this.#values[mid].z)
                r = mid;
            else if (priority > this.#values[mid].z)
                l = mid;
            else {
                this.#values.splice(mid, 1);
                break;
            }
            if (l >= r - 1) {
                this.#values.splice(mid, 1);
                break;
            }
        }
        return --this.length;
    }
    [Symbol.iterator]() {
        const values = this.#values;
        return (function* () { for (const i of values) yield i; })();
    }
}