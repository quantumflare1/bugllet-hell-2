import Renderable from "./render_component.mjs";

/**
 * @callback cb
 */

export default class RenderList {
    #values = new Map();
    length = 0;

    /**
     * Adds a new element to this list.
     * @param {Renderable} element The element to add.
     * @returns The new length of the list.
     */
    add(element) {
        if (this.#values.has(element.z))
            this.#values.get(element.z).add(element);
        else {
            const set = new Set();
            this.#values.set(element.z, set);
            set.add(element);
        }

        console.log("added");
        return ++this.length;
    }
    /**
     * Removes an element from this list.
     * @param {Renderable} element The removed element.
     * @returns The new length of the list.
     */
    delete(element) {
        this.#values.get(element.z)?.delete(element);

        console.log("removed");
        return --this.length;
    }
    [Symbol.iterator]() {
        const map = this.#values;
        return (function* () {
            for (const i of map.values()) 
                for (const j of i) 
                    yield j;
        })();
    }
}