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
        fireballElement.style.width = '20px';
        fireballElement.style.height = '20px';
        fireballElement.style.position = 'absolute';

        // Set position
        // TODO: need adjustment to match arm position
        fireballElement.style.left = wizard.x + wizard.width + 'px';
        fireballElement.style.top = wizard.y + wizard.width / 2 + 'px';

        // Modify wizard
        wizard.lastMagicUse = Date.now();

        // Add to DOM
        gameArea.appendChild(fireballElement);
    },

    createBug() {
        // Create element
        const bugElement = document.createElement('div');
        bugElement.classList.add('bug');
        
        // Styles
        bugElement.style.backgroundImage = 'url("images/bug.png")';
        bugElement.style.backgroundSize = 'contain';
        bugElement.style.backgroundRepeat = 'no-repeat'
        bugElement.style.backgroundPosition = 'center'
        bugElement.style.width = '30px';
        bugElement.style.height = '30px';
        bugElement.style.position = 'absolute';

        // Set position
        bugElement.style.left = gameArea.offsetWidth + 'px';
        bugElement.style.top = Math.random() * (gameArea.offsetHeight - 10) + 'px';

        // Append to DOM
        gameArea.appendChild(bugElement);

    }
}