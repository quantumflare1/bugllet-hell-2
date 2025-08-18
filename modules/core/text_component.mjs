import Entity from "./entity.mjs";
import Position from "./position_component.mjs";
import Renderable from "./render_component.mjs";

export default class Text extends Renderable {
    #text;
    pos;
    #align;

    /**
     * Creates a new Text.
     * @param {Entity} parent The entity this component is attached to.
     * @param {number} z The z-layer of this component.
     * @param {string} text The contents of the text.
     * @param {string} align The alignment of the text.
     */
    constructor(parent, z, text, align) {
        super(z);
        this.pos = parent.getComponent(Position);
        this.#text = text;
        this.#align = align;
    }
    render(ctx) {
        ctx.font = "20px serif"
        ctx.fillStyle = "black";
        ctx.textAlign = this.#align;
        ctx.fillText(this.#text, this.pos.getX(), this.pos.getY());
    }
    getText() {
        return this.#text;
    }
    setText(newText) {
        this.#text = newText;
    }
}