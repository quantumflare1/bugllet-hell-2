import Component from "./component.mjs";

export default class KeyboardInput extends Component {
    #heldKeys = new Set();

    constructor() {
        super();

        addEventListener("keydown", (e) => {
            e.preventDefault();
            if (!e.repeat) {
                this.#heldKeys.add(e.key);
                this.notify(e.key);
            }
        });
        addEventListener("keyup", (e) => {
            e.preventDefault();
            if (!e.repeat) {
                this.#heldKeys.delete(e.key);
                this.notify(e.key);
            }
        });
    }
    /**
     * Checks if a particular key is being held.
     * @param {string} key The checked key code.
     */
    holdingKey(key) {
        return this.#heldKeys.has(key);
    }
    /**
     * Registers a key press or release.
     * @param {string} key The key that changed state.
     */
    notify(key) {
        for (const observe of this.observers) {
            observe(this, key);
        }
    }
}