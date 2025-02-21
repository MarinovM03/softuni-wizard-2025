import { state } from "./game-state.js";
import { factory } from "./game-objects.js";
import { config } from "./game-config.js";

const gameScore = document.querySelector('.game-score');

// Game frames
function newFrame() {
    // Move wizard
    modifyWizardPosition();

    // Modify fireballs
    const fireballs = document.querySelectorAll('.fireball');
    for (const fireball of fireballs) {
        fireball.style.left = fireball.offsetLeft + config.magicSpeed + 'px';
    }

    // Apply score
    state.score += config.timePoints;
    gameScore.textContent = state.score + ' Pts.'

    // Game over check
    if (!state.isGameOver) {
        window.requestAnimationFrame(newFrame);
    }
}

// TODO: Fix acceleration on diagonals
function modifyWizardPosition() {
    const wizardElement = document.querySelector('.wizard');
    const gameArea = document.querySelector('.game-area');

    const { wizard } = state;

    // Wizard movement
    if (state.controls.KeyA && wizard.x > 0) {
        wizardElement.style.left = `${wizard.x -= config.speed}px`;
    }

    if (state.controls.KeyD && wizard.x + wizard.width < gameArea.offsetWidth) {
        wizardElement.style.left = `${wizard.x += config.speed}px`;
    }

    if (state.controls.KeyW && wizard.y > 0) {
        wizardElement.style.top = `${wizard.y -= config.speed}px`;
    }

    if (state.controls.KeyS && wizard.y + wizard.height < gameArea.offsetHeight) {
        wizardElement.style.top = `${wizard.y += config.speed}px`;
    }

    if (state.controls.Space) {
        wizardElement.style.backgroundImage = 'url("images/wizard-fire.png")'

        // Create fireball
        factory.createFireball(wizard);

    } else {
        wizardElement.style.backgroundImage = 'url("images/wizard.png")'
    }
}

export const engine = {
    start() {
    window.requestAnimationFrame(newFrame);
    }
}