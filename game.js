import { MS_PER_TICK, MAX_TICK_SPEEDUP } from "./modules/core/globals.mjs";
import * as Renderer from "./modules/core/renderer.mjs";
import mainScene from "./modules/main_scene.mjs";

let lastTickTime = document.timeline.currentTime;
let scene;
let tps = 0;
let fps = 0;
let lastTpsUpdate = document.timeline.currentTime;

function game(ms) {
    let timesTicked = 0;
    
    fps++;
    while (lastTickTime < ms && timesTicked < MAX_TICK_SPEEDUP) {
        scene.tick();
        tps++;

        lastTickTime += MS_PER_TICK;
        timesTicked++;
    }
    if (timesTicked === MAX_TICK_SPEEDUP) {
        lastTickTime = ms;
    }
    if (ms - lastTpsUpdate >= 1000) {
        console.log(`TPS: ${tps} FPS: ${fps}`);
        tps = 0;
        fps = 0;
        lastTpsUpdate += 1000;
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