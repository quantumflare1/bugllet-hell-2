import ColliderVisual from "./component/collider_visual_component.mjs";
import Collider from "../core/collision_component.mjs";
import Entity from "../core/entity.mjs";
import KeyboardInput from "../core/keyboard_component.mjs";
import Line from "../core/line_component.mjs";
import Position from "../core/position_component.mjs";
import Scene from "../core/scene.mjs";
import Velocity from "../core/velocity_component.mjs";
import PlayerLogic from "./component/player_component.mjs";
import Life from "./component/life_component.mjs";

const HITBOX_RADIUS = 4;
const MAX_LIFE = 30;

/**
 * Creates a new player.
 * @param {Scene} scene The scene the player is in.
 * @param {number} x The starting x coordinate of the player.
 * @param {number} y The starting y coordinate of the player.
 */
export default function createPlayer(scene, x, y) {
    const entity = new Entity(scene);
    entity.addComponent(new Position(x, y));
    entity.addComponent(new Velocity(entity));
    entity.addComponent(new Line(entity, 0, 0, 0, 0));
    entity.addComponent(new Collider(entity, HITBOX_RADIUS));
    entity.addComponent(new ColliderVisual(entity));
    entity.addComponent(new Life(MAX_LIFE, MAX_LIFE));

    const input = new KeyboardInput();
    entity.addComponent(input);

    entity.addComponent(new PlayerLogic(entity, scene));

    scene.addEntity(entity);
    return entity;
}