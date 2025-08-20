import Component from "./component.mjs";
import Entity from "./entity.mjs";
import State from "./state_component.mjs";

export default class NPC extends Component {
    #states;
    #curState = 0;
    parent;

    /**
     * 
     * @param {Entity} parent 
     * @param  {...State} states 
     */
    constructor(parent, ...states) {
        super();
        this.parent = parent;
        this.#states = [...states];
    }
    getState(state) {
        return state === this.#curState;
    }
    setState(newState) {
        this.#curState = newState;
        this.notify();
    }
    tick() {
        this.#states[this.#curState].tick(this.parent);
    }
}