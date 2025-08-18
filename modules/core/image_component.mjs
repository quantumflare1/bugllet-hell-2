import Entity from "./entity.mjs";
import Position from "./position_component.mjs";
import Renderable from "./render_component.mjs";

export default class Image extends Renderable {
    source;
    pos;

    /**
     * Creates a new ImageComponent.
     * @param {number} z The z-layer of this component.
     * @param {ImageBitmap} src The image source.
     * @param {Entity} parent The entity this component is attached to.
     */
    constructor(z, src, parent) {
        super(z);
        this.source = src;
        this.pos = parent.getComponent(Position);
    }
    render(ctx) {
        ctx.drawImage(this.source, this.pos.getX(), this.pos.getY());
    }
}