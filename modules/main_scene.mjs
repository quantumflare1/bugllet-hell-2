import createRect from "./filled_rect.mjs";
import Scene from "./core/scene.mjs";

const scene = new Scene();

scene.addEntity(createRect());
scene.addEntity(createRect(0, 0, 300, 300, 1, "rgb(200, 100, 50)"))
scene.addEntity(createRect(20, 20, 300, 300, 2, "rgb(50, 200, 100)"))
scene.addEntity(createRect(40, 40, 300, 300, 3, "rgb(50, 100, 200)"))
scene.addEntity(createRect(60, 60, 300, 300, 4, "rgb(100, 200, 50)"))

export default scene;