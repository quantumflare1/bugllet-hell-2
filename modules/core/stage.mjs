import Collider from "./collision_component.mjs";
import Scene from "./scene.mjs";

export default class Stage extends Scene {
    bulletManager = new Set();
    enemyManager = new Set();
    projectileManager = new Set();

    /**
     * 
     * @param {Entity} bullet A bullet.
     */
    addBullet(bullet) {
        super.addEntity(bullet);
        this.bulletManager.add(bullet.getComponent(Collider));
    }
}