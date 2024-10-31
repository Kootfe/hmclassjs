const readline = require('readline');
const { Human, HumanCore } = require('./human.js');

const KftCore = new HumanCore(98, 20, 100, 20);
KftCore.updateMood();
KftCore.updateFeeling();
const Koofte = new Human(KftCore);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const actions = ["Hit", "Heal", "AList", "Info", "Exit"];

function listActions() {
  console.log(actions);
}

function askQuestion() {
  rl.question('Action: ', (uInput) => {
    if (uInput.trim().toLowerCase() === "hit") {
      if (Koofte.hc.health > 0) {
        Koofte.hc.health -= 1;
        Koofte.hc.madness += 0.5;
        Koofte.hc.sadness += 0.3; 
        Koofte.hc.happiness -= 0.8; 
        KftCore.updateFeeling();
        KftCore.updateMood();
      }
      console.log(`Health: ${Koofte.hc.health}`);
    } else if (uInput.trim().toLowerCase() === "exit") {
      rl.close();
      return;
    } else if (uInput.trim().toLowerCase() === "alist") {
      listActions();
    } else if (uInput.trim().toLowerCase() === "info") {
      console.log(`
        ----------- INFO -----------
          Mood: ${Koofte.mood}
          Feeling: ${Koofte.feeling}
        ---------- STATS -----------
          Health: ${Koofte.hc.health}%
          Happiness: ${Koofte.hc.happiness}%
          Sadness: ${Koofte.hc.sadness}%
          Madness: ${Koofte.hc.madness}%
      `);
    } else if (uInput.trim().toLowerCase() === "heal") {
      if (Koofte.hc.health < 100) {
        Koofte.hc.health += 1;
        Koofte.hc.madness -= 0.2; 
        Koofte.hc.sadness -= 0.5; 
        Koofte.hc.happiness += 0.7; 
        KftCore.updateFeeling();
        KftCore.updateMood();
      }
      console.log(`Health: ${Koofte.hc.health}`);
    }

    askQuestion();
  });
}

askQuestion();
