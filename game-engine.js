import { state } from "./game-state.js";
import { config } from "./game-config.js";

// Game frames
function newFrame() {
    modifyWizardPosition();

    // Game over check
    if (!state.isGameOver) {
        window.requestAnimationFrame(newFrame);
    }
}

function modifyWizardPosition() {
    const wizardElement = document.querySelector('.wizard');

    // Wizard movement
    if (state.controls.KeyA) {
        wizardElement.style.left = `${state.wizard.x -= config.speed}px`;
    }

    if (state.controls.KeyD) {
        wizardElement.style.left = `${state.wizard.x += config.speed}px`;
    }

    if (state.controls.KeyW) {
        wizardElement.style.top = `${state.wizard.y -= config.speed}px`;
    }

    if (state.controls.KeyS) {
        wizardElement.style.top = `${state.wizard.y += config.speed}px`;
    }
}

export const engine = {
    start() {
    window.requestAnimationFrame(newFrame);
    }
}