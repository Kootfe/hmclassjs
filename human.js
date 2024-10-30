class HumanCore {
    existingMoods = [
        "Bored", "Mad", "Sad", "Happy", "Excited", "Anxious", "Calm", "Frustrated", 
        "Joyful", "Curious", "Nervous", "Content", "Disappointed", "Energetic", 
        "Overwhelmed", "Confused", "Hopeful", "Relaxed", "Pensive", "Surprised"
    ];

    existingFels = [
        "Happy", "Sad", "Angry", "Fearful", "Disgusted", "Excited", "Anxious", 
        "Content", "Nostalgic", "Lonely", "Optimistic", "Pessimistic", "Frustrated", 
        "Joyful", "Hopeful", "Relieved", "Embarrassed", "Jealous", "Ashamed", 
        "Grateful"
    ];

    constructor(health) {
        if (health < 0 || health > 100) throw new Error("Health must be bethewen 0 and 100");
        this.health = health
    }

    setMood(newMood) {
        if (!this.existingMoods.includes(newMood)) throw new Error("Not on list");
        this.mood = newMood;
    }

    setFeeling(newFel) {
        if (!this.existingFels.includes(newFel)) throw new Error("Not on list");
        this.emotion = newFel;
    }



    listMoods() {
        console.log("List of moods:");
        console.log(this.existingMoods);
    }

    listFeelings() {
        console.log("List of feelings:");
        console.log(this.existingFels);
    }
}

class Human {
    constructor(hc = new HumanCore()) {
        this.hc = hc;
    }

    get mood() {
        return this.hc.mood;
    }

    get emotion() {
        return this.hc.emotion;
    }

    get health() {
        return `${this.hc.health}%`
    }
}

class DevTools {
    constructor(hc = new HumanCore, hum = new Human) {
        this.hc = hc;
        this.hum = hum;
    }
}

module.exports = { Human, HumanCore };