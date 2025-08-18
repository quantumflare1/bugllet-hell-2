import Entity from "../core/entity.mjs";
import Position from "../core/position_component.mjs";
import Text from "../core/text_component.mjs";

export default function createText(scene, x, y, text, align) {
    const entity = new Entity();
    entity.addComponent(new Position(x, y));
    entity.addComponent(new Text(entity, 1, text, align));

    scene.addEntity(entity);
    return entity;
}