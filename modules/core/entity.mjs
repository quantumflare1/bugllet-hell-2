import Component from "./component.mjs";

/**
 * @callback constructor
 * @returns A Component
 */

export default class Entity {
    components = new Map();

    /**
     * Adds a component to this entity.
     * @param {Component} comp The added component.
     */
    addComponent(comp) {
        this.components.set(comp.constructor, comp);
    }
    /**
     * Removes a component to this entity.
     * @param {constructor} comp The removed component's class.
     */
    removeComponent(comp) {
        this.components.delete(comp);
    }
    /**
     * Gets the component instance attached to this Entity.
     * @param {constructor} comp 
     */
    getComponent(comp) {
        return this.components.get(comp);
    }
    tick() {
        this.components.forEach((v) => {
            v.tick();
        });
    }
}