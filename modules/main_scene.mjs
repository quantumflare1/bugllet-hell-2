import createRect from "./entity/filled_rect.mjs";
import createPlayer from "./entity/player.mjs";
import createBullet from "./entity/bullet.mjs";
import Stage from "./core/stage.mjs";

const scene = new Stage();

scene.addEntity(createRect());
scene.addEntity(createRect(280, 0, 720, 720, 1, "gray"));
createPlayer(scene, 640, 640);
createBullet(scene, 640, 360);

export default scene;