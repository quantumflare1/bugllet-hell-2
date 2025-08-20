import Collider from "../core/collision_component.mjs";
import Entity from "../core/entity.mjs";
import Line from "../core/line_component.mjs";
import Position from "../core/position_component.mjs";
import Stage from "../core/stage.mjs";
import Velocity from "../core/velocity_component.mjs";
import ColliderVisual from "./component/collider_visual_component.mjs";
import EnemyLogic from "./component/enemy_component.mjs";
import Life from "./component/life_component.mjs";

const DEFAULT_MAX_LIFE = 100;

/**
 * 
 * @param {Stage} scene 
 */
export default function createEnemy(scene, x, y, id) {
    const entity = new Entity();
    entity.addComponent(new Position(x, y));
    entity.addComponent(new Velocity(entity, 0, 0));
    entity.addComponent(new Line(entity, 0, 0, 0, 0)); // make data-driven

    const collider = new Collider(entity, 7, 1, 2);
    entity.addComponent(collider);
    entity.addComponent(new ColliderVisual(entity));

    entity.addComponent(new Life(DEFAULT_MAX_LIFE, DEFAULT_MAX_LIFE));
    entity.addComponent(new EnemyLogic(entity, scene));

    scene.addEntity(entity);
    return entity;
}