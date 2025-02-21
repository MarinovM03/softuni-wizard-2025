// State initialization
const state = {
    player: 'Wizard Martin',
    wizard: {
        x: 100,
        y: 100,
        width: 60,
        height: 60,
    },
    isGameOver: false,
    points: 0,
    controls: {
        KeyA: false,
        KeyS: false,
        KeyD: false,
        KeyW: false,
        Space: false,
    },
};

// Game object creation
const gameArea = document.querySelector('.game-area');
const factory = {
    createWizard(wizard) {
        // Create element
        const wizardElement = document.createElement('div');
        wizardElement.classList.add('wizard');

        // Set styles
        wizardElement.style.width = wizard.width + 'px';
        wizardElement.style.height = wizard.height + 'px';
        wizardElement.style.backgroundImage = 'url("images/wizard.png")';
        wizardElement.style.backgroundSize = 'contain';
        wizardElement.style.backgroundRepeat = 'no-repeat';
        wizardElement.style.backgroundPosition = 'center';

        // Set positions
        wizardElement.style.position = 'absolute';
        wizardElement.style.left = wizard.x + 'px';
        wizardElement.style.top = wizard.y + 'px';

        // Attach to DOM
        gameArea.appendChild(wizardElement);
    }
}

// Input control
document.addEventListener('keydown', (e) => {
    if (state.controls.hasOwnProperty(e.code)) {
        state.controls[e.code] = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (state.controls.hasOwnProperty(e.code)) {
        state.controls[e.code] = false;
    }
});

// Game frames
function newFrame() {
    const wizardElement = document.querySelector('.wizard');

    wizardElement.style.left = `${state.wizard.x++}px`;

    if (!state.isGameOver) {
        window.requestAnimationFrame(newFrame);
    }
}

// Start game

const startElement = document.querySelector('.game-start');
startElement.addEventListener('click', (e) => {
    // Hide start element
    e.currentTarget.classList.add('hidden');

    // Initialize game
    factory.createWizard(state.wizard);

    // Start game
    window.requestAnimationFrame(newFrame);
});