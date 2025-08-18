import createRect from "./entity/filled_rect.mjs";
import Scene from "./core/scene.mjs";
import createPlayer from "./entity/player.mjs";

const scene = new Scene();

scene.addEntity(createRect());
scene.addEntity(createRect(280, 0, 720, 720, 1, "gray"));
createPlayer(scene, 640, 640);

export default scene;