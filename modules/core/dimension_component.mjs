import Component from "./component.mjs";

export default class Dimension extends Component {
    #width;
    #height;

    constructor(w, h) {
        super();
        this.#width = w;
        this.#height = h;
    }
    setWidth(w) {
        this.#width = w;
        this.notify();
    }
    setHeight(h) {
        this.#height = h;
        this.notify();
    }
    addWidth(w) {
        this.#width += w;
        this.notify();
    }
    addHeight(h) {
        this.#height += h;
        this.notify();
    }
    getWidth() {
        return this.#width;
    }
    getHeight() {
        return this.#height;
    }
}