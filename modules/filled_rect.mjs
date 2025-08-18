import BlockColour from "./core/block_colour_component.mjs";
import Dimension from "./core/dimension_component.mjs";
import Entity from "./core/entity.mjs";
import { WIDTH, HEIGHT } from "./core/globals.mjs";
import Position from "./core/position_component.mjs";

export default function createRect(x = 0, y = 0, w = WIDTH, h = HEIGHT, z = 0, col = "darkgrey") {
    const entity = new Entity();
    entity.addComponent(new Position(x, y));
    entity.addComponent(new Dimension(w, h));
    entity.addComponent(new BlockColour(z, col, entity));
    return entity;
}