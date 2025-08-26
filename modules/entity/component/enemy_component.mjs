import Collider from "../../core/collision_component.mjs";
import Component from "../../core/component.mjs";
import Entity from "../../core/entity.mjs";
import Stage from "../../core/stage.mjs";
import createBullet from "../bullet.mjs";
import Life from "./life_component.mjs";

export default class EnemyLogic extends Component {
    bullets;
    life;
    collider;

    /**
     * 
     * @param {Entity} parent The entity this component belongs to.
     * @param {Stage} scene 
     */
    constructor(parent, scene) {
        super();
        this.bullets = scene.bulletManager;
        this.life = parent.getComponent(Life);
        this.collider = parent.getComponent(Collider);

        this.life.addObserver(() => {
            scene.removeEntity(parent);
        });

        this.createBullet = (x, y, id) => {
            createBullet(scene, x, y, id);
        }
    }
    tick() {
        for (const i of this.bullets) {
            if (this.collider.collidesWith(i.collider)) {
                this.life.damage(i.damage);
                this.notify();
                break;
            }
        }
    }
}