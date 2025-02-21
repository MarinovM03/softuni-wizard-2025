// Game object creation
const gameArea = document.querySelector('.game-area');
export const factory = {
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