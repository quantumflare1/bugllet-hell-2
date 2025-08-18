import Collider from "./core/collision_component.mjs";
import Entity from "./core/entity.mjs";
import Renderable from "./core/render_component.mjs";

export default class ColliderVisual extends Renderable {
    collider;

    /**
     * Creates a new ColliderVisual.
     * @param {Entity} parent The Entity this component is attached to.
     */
    constructor(parent) {
        super(100);
        this.collider = parent.getComponent(Collider);
    }
    render(ctx) {
        ctx.lineCap = "round";
        ctx.strokeStyle = "red";
        ctx.lineWidth = this.collider.getRadius() << 1;
        const line = this.collider.line;

        ctx.beginPath();
        ctx.moveTo(line.getX1() + line.ref.getX(), line.getY1() + line.ref.getY());
        ctx.lineTo(line.getX2() + line.ref.getX(), line.getY2() + line.ref.getY());
        ctx.stroke();
        ctx.closePath();
    }
}