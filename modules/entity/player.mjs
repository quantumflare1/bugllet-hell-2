import ColliderVisual from "../collider_visual_component.mjs";
import Collider from "../core/collision_component.mjs";
import Entity from "../core/entity.mjs";
import KeyboardInput from "../core/keyboard_component.mjs";
import Line from "../core/line_component.mjs";
import Position from "../core/position_component.mjs";
import Scene from "../core/scene.mjs";
import Velocity from "../core/velocity_component.mjs";
import PlayerLogic from "./component/player_component.mjs";

const HITBOX_RADIUS = 40;

/**
 * Creates a new player.
 * @param {Scene} scene The scene the player is in.
 * @param {number} x The starting x coordinate of the player.
 * @param {number} y The starting y coordinate of the player.
 */
export default function createPlayer(scene, x, y) {
    const entity = new Entity();
    entity.addComponent(new Position(x, y));
    entity.addComponent(new Velocity(entity));
    entity.addComponent(new Line(entity, 0, 0, 0, 0));
    entity.addComponent(new Collider(entity, HITBOX_RADIUS));
    entity.addComponent(new ColliderVisual(entity));

    const input = new KeyboardInput();
    entity.addComponent(input);

    entity.addComponent(new PlayerLogic(entity));

    scene.addEntity(entity);
}

function handleInput(comp, key) {
    console.log(key);
}