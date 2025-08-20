import ColliderVisual from "./component/collider_visual_component.mjs";
import Collider from "../core/collision_component.mjs";
import Entity from "../core/entity.mjs";
import Line from "../core/line_component.mjs";
import Position from "../core/position_component.mjs";
import Stage from "../core/stage.mjs";
import Velocity from "../core/velocity_component.mjs";
import ProjectileLogic from "./component/projectile_component.mjs";
import Damage from "./component/damage_component.mjs";

/**
 * 
 * @param {Stage} scene 
 * @param {number} x 
 * @param {number} y 
 * @param {number} id 
 */
export default function createBullet(scene, x, y, id) {
    const entity = new Entity();
    entity.addComponent(new Position(x, y));
    entity.addComponent(new Velocity(entity, 0, 1));
    entity.addComponent(new Line(entity, 0, 0, 0, 0)); // make this stuff data driven later

    const collider = new Collider(entity, 5, 0);
    entity.addComponent(collider);
    entity.addComponent(new ColliderVisual(entity));
    entity.addComponent(new Damage(1));

    entity.addComponent(new ProjectileLogic(entity, scene));

    scene.addEntity(entity);
    return entity;
}