/**
 * @callback tick
 */

import NPC from "./npc_component.mjs";

export default class State {
    machine;

    /**
     * 
     * @param {tick} tick 
     * @param {NPC} machine 
     */
    constructor(tick, machine) {
        super();
        this.machine = machine;
        this.tick = tick.bind(this);
    }
    tick() {}
}