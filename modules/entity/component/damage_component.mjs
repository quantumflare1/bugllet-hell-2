import Component from "../../core/component.mjs";

export default class Damage extends Component {
    #amount;
    #type;

    constructor(amt, type = 0) {
        super();
        this.#amount = amt;
        this.#type = type;
    }
    getAmount() {
        return this.#amount;
    }
    getType() {
        return this.#type;
    }
}