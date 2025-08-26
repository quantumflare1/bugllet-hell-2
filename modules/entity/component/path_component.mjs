import Component from "../../core/component.mjs";
import Vector from "../../core/vector.mjs";

export default class Path extends Component {
    #points = [];

    /**
     * 
     * @param {Vector} vec 
     */
    addPoint(vec) {
        this.#points.push(vec);
    }
    popPoint() {
        return this.#points.shift();
    }
}