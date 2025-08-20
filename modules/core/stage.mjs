import ProjectileLogic from "../entity/component/projectile_component.mjs";
import Collider from "./collision_component.mjs";
import Renderable from "./render_component.mjs";
import Scene from "./scene.mjs";

export default class Stage extends Scene {
    colliderManager = new Set();
    bulletManager = new Set();

    addEntity(entity) {
        super.addEntity(entity);
        const projComponent = entity.getComponentOfType(ProjectileLogic);
        if (projComponent !== null) this.bulletManager.add(projComponent);
        const collComponent = entity.getComponentOfType(Collider);
        if (collComponent !== null) this.colliderManager.add(collComponent);
    }
    removeEntity(entity) {
        super.removeEntity(entity);
        const projComponent = entity.getComponentOfType(ProjectileLogic);
        if (projComponent !== null) this.bulletManager.delete(projComponent);
        const collComponent = entity.getComponentOfType(Collider);
        if (collComponent !== null) this.colliderManager.delete(collComponent);
    }
}