import Collider from "./collision_component.mjs";
import Scene from "./scene.mjs";

export default class Stage extends Scene {
    colliderManager = new Set();

    /**
     * Adds a collider to this stage.
     * @param {Collider} coll A collider.
     */
    addCollider(coll) {
        this.colliderManager.add(coll);
    }
    removeCollider(coll) {
        this.colliderManager.delete(coll);
    }
}