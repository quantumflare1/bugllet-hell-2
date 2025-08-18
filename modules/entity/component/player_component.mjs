import Collider from "../../core/collision_component.mjs";
import Component from "../../core/component.mjs";
import Entity from "../../core/entity.mjs";
import KeyboardInput from "../../core/keyboard_component.mjs";
import Position from "../../core/position_component.mjs";
import Velocity from "../../core/velocity_component.mjs";

const BASE_MAX_VEL = 3;
const ACCELERATION = 1;
const BASE_FOCUS_VEL = 1;

const LEFT_BOUND = 280;
const RIGHT_BOUND = 1000;
const UPPER_BOUND = 0;
const LOWER_BOUND = 720;

export default class PlayerLogic extends Component {
    pos;
    vel;
    input;
    collider;
    leftPressed = false;
    rightPressed = false;
    upPressed = false;
    downPressed = false;

    /**
     * Creates a new PlayerLogic.
     * @param {Entity} parent The player.
     */
    constructor(parent) {
        super();
        this.pos = parent.getComponent(Position);
        this.vel = parent.getComponent(Velocity);
        this.input = parent.getComponent(KeyboardInput);
        this.input.addObserver(this.handleInput.bind(this));
        this.collider = parent.getComponent(Collider);
    }
    handleInput(comp, key) {
        switch (key) {
            case "ArrowUp":
                this.upPressed = !this.upPressed;
                break;
            case "ArrowDown":
                this.downPressed = !this.downPressed;
                break;
            case "ArrowLeft":
                this.leftPressed = !this.leftPressed;
                break;
            case "ArrowRight":
                this.rightPressed = !this.rightPressed;
                break;
        }
    }
    tick() {
        if (this.leftPressed) {
            this.vel.addX(-ACCELERATION);
        }
        else {
            if (this.vel.getX() < 0) {
                this.vel.addX(ACCELERATION);
                if (!this.rightPressed && this.vel.getX() > 0) {
                    this.vel.setX(0);
                }
            }
        }
        if (this.rightPressed) {
            this.vel.addX(ACCELERATION);
        }
        else {
            if (this.vel.getX() > 0) {
                this.vel.addX(-ACCELERATION);
                if (!this.leftPressed && this.vel.getX() < 0) {
                    this.vel.setX(0);
                }
            }
        }
        if (this.upPressed) {
            this.vel.addY(-ACCELERATION);
        }
        else {
            if (this.vel.getY() < 0) {
                this.vel.addY(ACCELERATION);
                if (!this.downPressed && this.vel.getY() > 0) {
                    this.vel.setY(0);
                }
            }
        }
        if (this.downPressed) {
            this.vel.addY(ACCELERATION);
        }
        else {
            if (this.vel.getY() > 0) {
                this.vel.addY(-ACCELERATION);
                if (!this.upPressed && this.vel.getY() < 0) {
                    this.vel.setY(0);
                }
            }
        }

        if (this.vel.getX() > BASE_MAX_VEL) {
            this.vel.setX(BASE_MAX_VEL);
        }
        if (this.vel.getX() < -BASE_MAX_VEL) {
            this.vel.setX(-BASE_MAX_VEL);
        }
        if (this.vel.getY() > BASE_MAX_VEL) {
            this.vel.setY(BASE_MAX_VEL);
        }
        if (this.vel.getY() < -BASE_MAX_VEL) {
            this.vel.setY(-BASE_MAX_VEL);
        }

        const rad = this.collider.getRadius();
        if (this.pos.getX() - rad < LEFT_BOUND) {
            this.pos.setX(LEFT_BOUND + rad);
        }
        if (this.pos.getX() + rad > RIGHT_BOUND) {
            this.pos.setX(RIGHT_BOUND - rad);
        }
        if (this.pos.getY() - rad < UPPER_BOUND) {
            this.pos.setY(UPPER_BOUND + rad);
        }
        if (this.pos.getY() + rad > LOWER_BOUND) {
            this.pos.setY(LOWER_BOUND - rad);
        }
    }
}