import Collider from "../core/collision_component.mjs";
import Entity from "../core/entity.mjs";
import Line from "../core/line_component.mjs";
import Position from "../core/position_component.mjs";
import Stage from "../core/stage.mjs";
import Velocity from "../core/velocity_component.mjs";
import ColliderVisual from "./component/collider_visual_component.mjs";
import Damage from "./component/damage_component.mjs";
import ProjectileLogic from "./component/projectile_component.mjs";

const BASE_DEFAULT_SPEED = 10;

/**
 * Creates a new projectile.
 * @param {Stage} scene The scene this entity belongs to.
 * @param {number} x 
 * @param {number} y 
 * @param {number} id 
 */
export default function createProjectile(scene, x, y, id) {
    const entity = new Entity();
    entity.addComponent(new Position(x, y));
    entity.addComponent(new Velocity(entity, 0, -BASE_DEFAULT_SPEED));
    entity.addComponent(new Line(entity, 0, 0, 0, 0)); // make data-driven
    
    const collider = new Collider(entity, 2, 2, 1);
    entity.addComponent(collider);
    entity.addComponent(new ColliderVisual(entity));
    entity.addComponent(new Damage(20));

    const logic = new ProjectileLogic(entity, scene);
    entity.addComponent(logic);

    scene.addEntity(entity);
    return entity;
}