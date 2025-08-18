import ColliderVisual from "./component/collider_visual_component.mjs";
import Collider from "../core/collision_component.mjs";
import Entity from "../core/entity.mjs";
import Line from "../core/line_component.mjs";
import Position from "../core/position_component.mjs";
import Stage from "../core/stage.mjs";

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
    entity.addComponent(new Line(entity, 0, 0, 0, 0)); // make this stuff data driven later
    entity.addComponent(new Collider(entity, 5));
    entity.addComponent(new ColliderVisual(entity));

    scene.addBullet(entity);
}