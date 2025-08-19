import Collider from "./collision_component.mjs";
import Scene from "./scene.mjs";

export default class Stage extends Scene {
    bulletManager = new Set();
    enemyManager = new Set();
    projectileManager = new Set();

    /**
     * Adds a bullet to this stage.
     * @param {Entity} bullet A bullet.
     */
    addBullet(bullet) {
        super.addEntity(bullet);
        this.bulletManager.add(bullet.getComponent(Collider));
    }
    addEnemy(enemy) {
        super.addEntity(enemy);
        this.enemyManager.add(enemy.getComponent(Collider));
    }
    addProjectile(proj) {
        super.addEntity(proj);
        this.projectileManager.add(proj.getComponent(Collider));
    }
}