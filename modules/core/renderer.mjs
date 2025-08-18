import { WIDTH, HEIGHT } from "./globals.mjs";
import Scene from "./scene.mjs";

const canvas = document.createElement("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;
const ctx = canvas.getContext("2d");

resize();

function resize() {
    const goalRatio = WIDTH / HEIGHT;
    const actualRatio = innerWidth / innerHeight;

    if (goalRatio > actualRatio) {
        canvas.style.width = "100%";
        canvas.style.height = "auto";
    }
    else {
        canvas.style.width = "auto";
        canvas.style.height = "100%";
    }
}

/**
 * Renders a single frame of a scene.
 * @param {Scene} scene The scene to render.
 */
function render(scene) {
    ctx.reset();

    for (const comp of scene.renderList)
        comp.render(ctx);
}

function init() {
    document.body.appendChild(canvas);
    addEventListener("resize", resize);

    if (!ctx) {
        throw new Error("Couldn't create graphics context :(");
    }
}

export { render, init };