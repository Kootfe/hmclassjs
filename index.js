const { Human, HumanCore } = require('./human.js');

const bt = document.getElementById('btn');
const txt = document.getElementById('txt');

const KftCore = new HumanCore(34, 20, 100, 20)
KftCore.updateMood();
KftCore.updateFeeling();
const Koofte = new Human(KftCore);

console.log(Koofte.mood);
console.log(Koofte.feeling);