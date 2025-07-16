// 1. Define the character object
const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
    attacked() {
      if (this.health >= 10) {
        this.health -= 10;
      } else {
          this.health = 0; // Prevent health from going negative
          alert('Character has fainted!');
      }
    },
    levelUp() {
      this.level += 1;
      this.health += 20;
    }
};

// 2. Select all the DOM elements that need to be updated
const charImage = document.querySelector('.image');
const charName = document.querySelector('.name');
const charClass = document.getElementById('class');
const charLevel = document.getElementById('level');
const charHealth = document.getElementById('health');
const attackBtn = document.getElementById('attacked');
const levelUpBtn = document.getElementById('levelup');

// 3. Create a function to update the DOM with the character's current stats
function updateDisplay() {
  charImage.src = character.image;
  charImage.alt = `Image of ${character.name}`;
  charName.textContent = character.name;
  charClass.textContent = character.class;
  charLevel.textContent = character.level;
  charHealth.textContent = character.health;
}

// 4. Add event listeners to the buttons
attackBtn.addEventListener('click', () => {
  character.attacked(); // Call the object's method
  updateDisplay();      // Update the screen
});

levelUpBtn.addEventListener('click', () => {
  character.levelUp();  // Call the object's method
  updateDisplay();      // Update the screen
});

// 5. Initial call to populate the card when the page first loads
updateDisplay();