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
    /**
     * Gets this Entity's component or subcomponent, if it exists.
     * @param {constructor} comp A component.
     * @returns The component instance, or null if it does not exist.
     */
    getComponentOfType(comp) {
        for (const i of this.components.values()) {
            if (i instanceof comp) return i;
        }
        return null;
    }
    tick() {
        this.components.forEach((v) => {
            v.tick();
        });
    }
}