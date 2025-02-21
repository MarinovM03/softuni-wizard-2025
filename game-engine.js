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
    const gameArea = document.querySelector('.game-area');

    // Wizard movement
    if (state.controls.KeyA && state.wizard.x > 0) {
        wizardElement.style.left = `${state.wizard.x -= config.speed}px`;
    }

    if (state.controls.KeyD && state.wizard.x + state.wizard.width < gameArea.offsetWidth) {
        wizardElement.style.left = `${state.wizard.x += config.speed}px`;
    }

    if (state.controls.KeyW && state.wizard.y > 0) {
        wizardElement.style.top = `${state.wizard.y -= config.speed}px`;
    }

    if (state.controls.KeyS && state.wizard.y + state.wizard.height < gameArea.offsetHeight) {
        wizardElement.style.top = `${state.wizard.y += config.speed}px`;
    }
}

export const engine = {
    start() {
    window.requestAnimationFrame(newFrame);
    }
}