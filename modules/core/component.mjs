/**
 * @callback observer
 */

export default class Component {
    observers = new Set();

    /**
     * Adds an observer to this component.
     * @param {observer} obs The new observer.
     */
    addObserver(obs) {
        this.observers.add(obs);
    }
    /**
     * Removes an observer from this component.
     * @param {observer} obs The removed observer.
     */
    removeObserver(obs) {
        this.observers.add(obs);
    }
    /**
     * Registers a change in this component to all observers attached.
     */
    notify() {
        for (const observe of this.observers) {
            observe(this);
        }
    }
    tick() {}
}