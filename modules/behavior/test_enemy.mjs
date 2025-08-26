import Entity from "../core/entity.mjs";
import GeometricVector from "../core/geometric_vector.mjs";
import Position from "../core/position_component.mjs";
import Stage from "../core/stage.mjs";
import Velocity from "../core/velocity_component.mjs";
import EnemyLogic from "../entity/component/enemy_component.mjs";

const ATTACK_COOLDOWN = 100;
const MOVE_COOLDOWN = 25;
const MOVE_TIME = 80;
const MOVE_DISTANCE = 60;

export default class extends EnemyLogic {
    pos;
    vel;
    attackInterval;
    moveInterval;
    moving = false;
    /**
     * 
     * @param {Entity} parent 
     * @param {Stage} scene 
     */
    constructor(parent, scene) {
        super(parent, scene);

        this.pos = parent.getComponent(Position);
        this.vel = parent.getComponent(Velocity);
        this.attackInterval = ATTACK_COOLDOWN;
        this.moveInterval = MOVE_COOLDOWN;
    }
    tick() {
        super.tick();

        this.attackInterval--;
        this.moveInterval--;

        if (this.attackInterval === 0) {
            this.attackInterval = ATTACK_COOLDOWN;
            this.attack();
        }
        if (this.moveInterval === 0) {
            if (this.moving) {
                this.moveInterval = MOVE_COOLDOWN;
                this.vel.setX(0);
                this.vel.setY(0);
                this.moving = false;
            }
            else {
                this.moveInterval = MOVE_TIME;
                const angle = Math.random() * Math.PI * 2;
                const speed = MOVE_DISTANCE / MOVE_TIME;
                const vec = new GeometricVector(speed, angle).toAlgebraic();
                this.vel.setX(vec.getX());
                this.vel.setY(vec.getY());
                this.moving = true;
            }
        }
    }
    attack() {
        this.createBullet(this.pos.getX(), this.pos.getY(), 0);
    }
}