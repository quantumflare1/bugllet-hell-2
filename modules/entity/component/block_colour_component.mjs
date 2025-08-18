import Dimension from "../../core/dimension_component.mjs";
import Entity from "../../core/entity.mjs";
import Position from "../../core/position_component.mjs";
import Renderable from "../../core/render_component.mjs";

export default class BlockColour extends Renderable {
    col;
    pos;
    dim;

    /**
     * Creates a new BlockColour.
     * @param {number} z The z-layer of this component.
     * @param {string} col The colour of this component as a CSS <color> value.
     * @param {Entity} parent The entity this component is attached to.
     */
    constructor(z, col, parent) {
        super(z);
        this.col = col;
        this.pos = parent.getComponent(Position);
        this.dim = parent.getComponent(Dimension);
    }
    render(ctx) {
        ctx.fillStyle = this.col;
        ctx.fillRect(this.pos.getX(), this.pos.getY(), this.dim.getWidth(), this.dim.getHeight());
    }
}