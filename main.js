import { state } from "./game-state.js";
import { factory } from "./game-objects.js";
import { engine } from "./game-engine.js";
import "./game-controls.js";



// Start game
const startElement = document.querySelector('.game-start');
startElement.addEventListener('click', (e) => {
    // Hide start element
    e.currentTarget.classList.add('hidden');

    // Initialize game
    factory.createWizard(state.wizard);

    // Start game
    engine.start();
});