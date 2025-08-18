import Text from "../core/text_component.mjs";
import createText from "./text.mjs";

export default function createLifeDisplay(scene, x, y, player) {
    const entity = createText(scene, x, y, `Life ${player.getLives()}`, "left");
    player.addObserver((player) => {
        entity.getComponent(Text).setText(`Life ${player.getLives()}`);
    });
    
    return entity;
}