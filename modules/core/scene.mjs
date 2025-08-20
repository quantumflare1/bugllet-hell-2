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
        const component = entity.getComponentOfType(Renderable);
        if (component !== null) this.renderList.add(component);
    }
    /**
     * Removes an entity from this scene.
     * @param {Entity} entity The removed entity.
     */
    removeEntity(entity) {
        this.entities.delete(entity);
        const component = entity.getComponentOfType(Renderable);
        if (component !== null) this.renderList.delete(component);
    }
    tick() {
        for (const i of this.entities) {
            i.tick();
        }
    }
}