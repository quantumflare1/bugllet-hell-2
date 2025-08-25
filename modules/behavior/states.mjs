import Entity from "../core/entity.mjs";
import Position from "../core/position_component.mjs";
import TargetPosition from "../core/target_position_component.mjs";
import Velocity from "../core/velocity_component.mjs";

/**
 * 
 * @param {Entity} parent The entity in this state.
 */
export function enterDefault(parent) {
    const target = parent.getComponent(TargetPosition);

    if (target) {
        if (Math.abs(target.getDistX()) < 1 && Math.abs(target.getDistY()) < 1) {
            const pos = parent.getComponent(Position);
            pos.setX(target.getX());
            pos.setY(target.getY());
            vel.setX(0);
            vel.setY(0);

            parent.removeComponent(TargetPosition);
        }
    }
    else {
        const newTarget = new TargetPosition(parent, 20, 20);
        parent.addComponent(newTarget);
        const vel = parent.getComponent(Velocity);
        vel.setX(newTarget.getDistX() / 30);
        vel.setY(newTarget.getDistY() / 30);
    }
}

export function generateMovementNodes(...nodes) {
    // nodes
}

// basic ai
/*
1. generate movement nodes
2. go to next movement node
3. attack
4. return to step 2 as long as there are more nodes
    otherwise, destroy self

movement node generation
1. pick a starting point
2. just move by the next vector
3. put a new node there
4. repeat until there are no more vectors
5. put a new node at the nearest offscreen point
*/