import Component from "../../core/component.mjs";
import Damage from "./damage_component.mjs";

export default class Life extends Component {
    #amount;
    #max;
    alive = true;

    constructor(amount, max) {
        super();
        this.#amount = amount;
        this.#max = max;
    }
    getAmount() {
        return this.#amount;
    }
    getMax() {
        return this.#max;
    }
    /**
     * 
     * @param {Damage} dmg The damage to deal.
     */
    damage(dmg) {
        this.#amount -= dmg.getAmount();

        if (this.#amount <= 0) {
            this.alive = false;
            this.notify();
        }
    }
    reset() {
        this.#amount = this.#max;
    }
}