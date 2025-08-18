import RenderList from "./render_list.mjs";
import Renderable from "./render_component.mjs";
import Entity from "./entity.mjs";

export default class Scene {
    renderList = new RenderList();
    entities = new Set();

    /**
     * Adds a new entity to this scene.
     * @param {Entity} entity The added entity.
     */
    addEntity(entity) {
        this.entities.add(entity);
        entity.components.forEach((v) => {
            if (v instanceof Renderable)
                this.renderList.add(v);
        });
    }
    /**
     * Removes an entity from this scene.
     * @param {Entity} entity The removed entity.
     */
    removeEntity(entity) {
        this.entities.delete(entity);
        for (const comp of entity) {
            if (comp instanceof Renderable)
                this.renderList.delete(comp);
        }
    }
    tick() {
        for (const i of this.entities) {
            i.tick();
        }
    }
}