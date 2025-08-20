import Collider from "../../core/collision_component.mjs";
import Component from "../../core/component.mjs";
import Entity from "../../core/entity.mjs";
import KeyboardInput from "../../core/keyboard_component.mjs";
import Position from "../../core/position_component.mjs";
import Stage from "../../core/stage.mjs";
import Velocity from "../../core/velocity_component.mjs";
import { WIDTH, HEIGHT, FIELD_WIDTH, FIELD_HEIGHT } from "../../core/globals.mjs";
import createProjectile from "../projectile.mjs";
import Life from "./life_component.mjs";

const BASE_MAX_VEL = 2;
const ACCELERATION = 0.5;
const BASE_FOCUS_VEL = 1;
const BASE_INV_TIME = 40;

const BASE_FIRE_COOLDOWN = 10;

const LEFT_BOUND = WIDTH / 2 - FIELD_WIDTH / 2;
const RIGHT_BOUND = WIDTH / 2 + FIELD_WIDTH / 2;
const UPPER_BOUND = HEIGHT / 2 - FIELD_HEIGHT / 2;
const LOWER_BOUND = HEIGHT / 2 + FIELD_HEIGHT / 2;

export default class PlayerLogic extends Component {
    pos;
    vel;
    input;
    collider;
    life;
    #fireCooldown = 0;
    #bullets;
    #invTime = -1;

    /**
     * Creates a new PlayerLogic.
     * @param {Entity} parent The player.
     * @param {Stage} scene The scene the player is in. 
     */
    constructor(parent, scene) {
        super();
        this.pos = parent.getComponent(Position);
        this.vel = parent.getComponent(Velocity);
        this.input = parent.getComponent(KeyboardInput);
        this.collider = parent.getComponent(Collider);
        this.life = parent.getComponent(Life);
        
        this.#bullets = scene.bulletManager;

        this.createProjectile = (id) => {
            createProjectile(scene, this.pos.getX(), this.pos.getY(), id);
        }
    }
    tick() {
        if (!this.life.alive) return;

        // movement
        if (this.input.holdingKey("ArrowLeft")) this.vel.addX(-ACCELERATION);
        else {
            if (this.vel.getX() < 0) {
                this.vel.addX(ACCELERATION);
                if (!this.input.holdingKey("ArrowRight") && this.vel.getX() > 0) {
                    this.vel.setX(0);
                }
            }
        }
        if (this.input.holdingKey("ArrowRight")) this.vel.addX(ACCELERATION);
        else {
            if (this.vel.getX() > 0) {
                this.vel.addX(-ACCELERATION);
                if (!this.input.holdingKey("ArrowLeft") && this.vel.getX() < 0) {
                    this.vel.setX(0);
                }
            }
        }
        if (this.input.holdingKey("ArrowUp")) this.vel.addY(-ACCELERATION);
        else {
            if (this.vel.getY() < 0) {
                this.vel.addY(ACCELERATION);
                if (!this.input.holdingKey("ArrowDown") && this.vel.getY() > 0) {
                    this.vel.setY(0);
                }
            }
        }
        if (this.input.holdingKey("ArrowDown")) this.vel.addY(ACCELERATION);
        else {
            if (this.vel.getY() > 0) {
                this.vel.addY(-ACCELERATION);
                if (!this.input.holdingKey("ArrowUp") && this.vel.getY() < 0) {
                    this.vel.setY(0);
                }
            }
        }

        if (this.vel.getX() > BASE_MAX_VEL) this.vel.setX(BASE_MAX_VEL);
        if (this.vel.getX() < -BASE_MAX_VEL) this.vel.setX(-BASE_MAX_VEL);
        if (this.vel.getY() > BASE_MAX_VEL) this.vel.setY(BASE_MAX_VEL);
        if (this.vel.getY() < -BASE_MAX_VEL) this.vel.setY(-BASE_MAX_VEL);

        const rad = this.collider.getRadius();
        if (this.pos.getX() - rad < LEFT_BOUND) this.pos.setX(LEFT_BOUND + rad);
        if (this.pos.getX() + rad > RIGHT_BOUND) this.pos.setX(RIGHT_BOUND - rad);
        if (this.pos.getY() - rad < UPPER_BOUND) this.pos.setY(UPPER_BOUND + rad);
        if (this.pos.getY() + rad > LOWER_BOUND) this.pos.setY(LOWER_BOUND - rad);

        // collision
        for (const i of this.#bullets) {
            if (this.collider.collidesWith(i.collider)) {
                this.life.damage(i.damage);
                this.#invTime = BASE_INV_TIME;
                this.collider.toggle(false);
                this.notify();
                break;
            }
        }
        if (this.#invTime >= 0) this.#invTime--;
        if (this.#invTime === 0) this.collider.toggle(true);

        // firing
        if (this.input.holdingKey("z") || this.input.holdingKey("Shift") && this.input.holdingKey("Z")) {
            if (this.#fireCooldown === 0) {
                this.createProjectile(0 /* whatever */);
                this.#fireCooldown = BASE_FIRE_COOLDOWN;
            }
        }
        if (this.#fireCooldown > 0)
            this.#fireCooldown--;
    }
}