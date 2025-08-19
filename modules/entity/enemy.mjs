import Collider from "../core/collision_component.mjs";
import Entity from "../core/entity.mjs";
import Line from "../core/line_component.mjs";
import Position from "../core/position_component.mjs";
import Stage from "../core/stage.mjs";
import ColliderVisual from "./component/collider_visual_component.mjs";

/**
 * 
 * @param {Stage} scene 
 */
export default function createEnemy(scene, x, y, id) {
    const entity = new Entity();
    entity.addComponent(new Position(x, y));
    entity.addComponent(new Line(entity, 0, 0, 0, 0)); // make data-driven
    entity.addComponent(new Collider(entity, 7));
    entity.addComponent(new ColliderVisual(entity));

    scene.addEnemy(entity);
    return entity;
}