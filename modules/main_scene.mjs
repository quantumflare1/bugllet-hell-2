import createRect from "./entity/filled_rect.mjs";
import createPlayer from "./entity/player.mjs";
import createBullet from "./entity/bullet.mjs";
import Stage from "./core/stage.mjs";
import { X_OFFSET, Y_OFFSET, FIELD_WIDTH, FIELD_HEIGHT } from "./core/globals.mjs";
import createLifeDisplay from "./entity/life_display.mjs";
import PlayerLogic from "./entity/component/player_component.mjs";
import createEnemy from "./entity/enemy.mjs";

const scene = new Stage();

scene.addEntity(createRect());
scene.addEntity(createRect(X_OFFSET, Y_OFFSET, FIELD_WIDTH, FIELD_HEIGHT, 1, "gray"));
const player = createPlayer(scene, X_OFFSET + FIELD_WIDTH / 2, Y_OFFSET + FIELD_HEIGHT - 20);
createBullet(scene, X_OFFSET + FIELD_WIDTH / 2, Y_OFFSET + FIELD_HEIGHT / 2);
createLifeDisplay(scene, X_OFFSET + FIELD_WIDTH + 5, 65, player.getComponent(PlayerLogic));
createEnemy(scene, X_OFFSET + FIELD_WIDTH / 2, 40);

export default scene;