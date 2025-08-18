import createRect from "./entity/filled_rect.mjs";
import createPlayer from "./entity/player.mjs";
import createBullet from "./entity/bullet.mjs";
import Stage from "./core/stage.mjs";
import { WIDTH, HEIGHT, FIELD_WIDTH, FIELD_HEIGHT } from "./core/globals.mjs";
import createText from "./entity/text.mjs";

const scene = new Stage();

scene.addEntity(createRect());
scene.addEntity(createRect(WIDTH / 2 - FIELD_WIDTH / 2, HEIGHT / 2 - FIELD_HEIGHT / 2, FIELD_WIDTH, FIELD_HEIGHT, 1, "gray"));
createPlayer(scene, WIDTH / 2, HEIGHT / 2 + FIELD_HEIGHT / 2 - 20);
createBullet(scene, WIDTH / 2, HEIGHT / 2);
createText(scene, WIDTH / 2 + FIELD_WIDTH / 2 + 5, 65, "Life", "left");

export default scene;