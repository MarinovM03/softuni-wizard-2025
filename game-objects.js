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
    },

    createFireball(wizard) {
        // Check cooldown
        if (wizard.lastMagicUse + wizard.cooldown > Date.now()) {
            return;
        }

        // Create element
        const fireballElement = document.createElement('div');
        fireballElement.classList.add('fireball');
        
        // Styles
        fireballElement.style.backgroundImage = 'url("images/fire-ball.png")';
        fireballElement.style.backgroundSize = 'contain';
        fireballElement.style.backgroundRepeat = 'no-repeat'
        fireballElement.style.backgroundPosition = 'center'
        fireballElement.style.width = '10px';
        fireballElement.style.height = '10px';
        fireballElement.style.position = 'absolute';

        // Set position
        // TODO: need adjustment to match arm position
        fireballElement.style.left = wizard.x + wizard.width + 'px';
        fireballElement.style.top = wizard.y + wizard.width / 2 + 'px';

        // Modify wizard
        wizard.lastMagicUse = Date.now();

        // Add to DOM
        gameArea.appendChild(fireballElement);
    }
}