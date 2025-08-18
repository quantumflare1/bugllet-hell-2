import { MS_PER_TICK, MAX_TICK_SPEEDUP } from "./modules/core/globals.mjs";
import * as Renderer from "./modules/core/renderer.mjs";
import mainScene from "./modules/main_scene.mjs";
import Scene from "./modules/core/scene.mjs";

let lastTickTime = document.timeline.currentTime;
let scene;

function game(ms) {
    let timesTicked = 0;
    
    while (lastTickTime < ms && timesTicked < MAX_TICK_SPEEDUP) {
        scene.tick();

        lastTickTime += MS_PER_TICK;
        timesTicked++;
    }
    if (timesTicked === MAX_TICK_SPEEDUP) {
        lastTickTime = ms;
    }

    Renderer.render(scene);

    requestAnimationFrame(game);
}

function load() {
    scene = mainScene;
    Renderer.init();
    lastTickTime = document.timeline.currentTime;

    requestAnimationFrame(game);
    removeEventListener("load", load);
}

addEventListener("load", load);