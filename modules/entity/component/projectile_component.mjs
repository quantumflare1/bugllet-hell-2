import Entity from "../../core/entity.mjs";
import Position from "../../core/position_component.mjs";
import { X_OFFSET, Y_OFFSET, FIELD_HEIGHT, FIELD_WIDTH } from "../../core/globals.mjs";
import Collider from "../../core/collision_component.mjs";
import Stage from "../../core/stage.mjs";
import Component from "../../core/component.mjs";
import Damage from "./damage_component.mjs";

const KILLZONE_PADDING = 20;
const LEFT_BOUND = X_OFFSET - KILLZONE_PADDING;
const RIGHT_BOUND = X_OFFSET + FIELD_WIDTH + KILLZONE_PADDING;
const UPPER_BOUND = Y_OFFSET - KILLZONE_PADDING;
const LOWER_BOUND = Y_OFFSET + FIELD_HEIGHT + KILLZONE_PADDING;

export default class ProjectileLogic extends Component {
    pos;
    collider;
    damage;

    /**
     * 
     * @param {Entity} parent The entity this component belongs to.
     * @param {Stage} scene The stage the entity belongs to.
     */
    constructor(parent, scene) {
        super();
        this.pos = parent.getComponent(Position);
        this.collider = parent.getComponent(Collider);
        this.damage = parent.getComponent(Damage);
        this.removeSelf = () => {
            scene.removeEntity(parent);
        }
    }
    tick() {
        const rad = this.collider.getRadius();
        if (this.pos.getX() + rad < LEFT_BOUND || this.pos.getX() - rad > RIGHT_BOUND ||
        this.pos.getY() + rad < UPPER_BOUND || this.pos.getY() - rad > LOWER_BOUND)
            this.removeSelf();
    }
}