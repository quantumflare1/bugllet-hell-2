import Entity from "../../core/entity.mjs";
import Position from "../../core/position_component.mjs";
import { WIDTH, HEIGHT, FIELD_HEIGHT, FIELD_WIDTH } from "../../core/globals.mjs";
import Collider from "../../core/collision_component.mjs";
import Stage from "../../core/stage.mjs";
import Component from "../../core/component.mjs";

const KILLZONE_PADDING = 20;
const LEFT_BOUND = WIDTH / 2 - FIELD_WIDTH / 2 - KILLZONE_PADDING;
const RIGHT_BOUND = WIDTH / 2 + FIELD_WIDTH / 2 + KILLZONE_PADDING;
const UPPER_BOUND = HEIGHT / 2 - FIELD_HEIGHT / 2 - KILLZONE_PADDING;
const LOWER_BOUND = HEIGHT / 2 + FIELD_HEIGHT / 2 + KILLZONE_PADDING;

export default class ProjectileLogic extends Component {
    pos;
    collider;

    /**
     * 
     * @param {Entity} parent The entity this component belongs to.
     * @param {Stage} scene The stage the entity belongs to.
     */
    constructor(parent, scene) {
        super();
        this.pos = parent.getComponent(Position);
        this.collider = parent.getComponent(Collider);
        this.removeSelf = () => {
            scene.removeEntity(parent);
            scene.removeCollider(this.collider);
        };
    }
    tick() {
        const rad = this.collider.getRadius();
        if (this.pos.getX() - rad < LEFT_BOUND || this.pos.getX() + rad > RIGHT_BOUND ||
        this.pos.getY() - rad < UPPER_BOUND || this.pos.getY() + rad > LOWER_BOUND)
            this.removeSelf();
    }
}