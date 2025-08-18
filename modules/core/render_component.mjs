import Component from "./component.mjs";

export default class Renderable extends Component {
    z;

    /**
     * Creates a new RenderComponent.
     * @param {number} z The z-index when rendered.
     */
    constructor(z) {
        super();
        this.z = z;
    }
    /**
     * Renders this component to the screen.
     * @param {CanvasRenderingContext2D} ctx The context in which to render.
     */
    render(ctx) {}
}