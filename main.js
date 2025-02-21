// State initialization
const state = {
    player: 'Wizard Martin',
    wizard: {
        x: 100,
        y: 100,
        width: 50,
        height: 50,
    },
    isGameOver: false,
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

// Screen management

// Game loop

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