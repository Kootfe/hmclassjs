const { Human, HumanCore } = require('./human.js');


const HC = new HumanCore(34);

HC.setFeeling('Happy')
HC.setMood('Happy')

const Koofte = new Human(HC);

console.log(Koofte.mood)
console.log(Koofte.emotion)
console.log(Koofte.health)