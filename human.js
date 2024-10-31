class HumanCore {
    existingMoods = [
        "Bored", "Mad", "Sad", "Happy", "Excited", "Anxious", "Calm", "Frustrated", 
        "Joyful", "Curious", "Nervous", "Content", "Disappointed", "Energetic", 
        "Overwhelmed", "Confused", "Hopeful", "Relaxed", "Pensive", "Surprised"
    ];

    existingFeelings = [
        "Happy", "Sad", "Angry", "Fearful", "Disgusted", "Excited", "Anxious", 
        "Content", "Nostalgic", "Lonely", "Optimistic", "Pessimistic", "Frustrated", 
        "Joyful", "Hopeful", "Relieved", "Embarrassed", "Jealous", "Ashamed", 
        "Grateful"
    ];

    constructor(health, madness, happiness, sadness) {
        if (health < 0 || health > 100) throw new Error("Health must be between 0 and 100");
        this.health = health;
        if (madness < 0 || madness > 100) throw new Error("Madness must be between 0 and 100");
        this.madness = madness;
        if (happiness < 0 || happiness > 100) throw new Error("Happiness must be between 0 and 100");
        this.happiness = happiness;
        if (sadness < 0 || sadness > 100) throw new Error("Sadness must be between 0 and 100");
        this.sadness = sadness;
    }

    updateMood() {
        if (this.health < 30) {
            this.setMood("Overwhelmed");
        } else if (this.health > 70 && this.happiness > 50) {
            this.setMood("Energetic");
        } else if (this.sadness > 70 && this.sadness >= this.madness && this.sadness >= this.happiness) {
            this.setMood("Overwhelmed");
        } else if (this.madness > 70 && this.madness >= this.happiness) {
            this.setMood("Frustrated");
        } else if (this.happiness > 70) {
            this.setMood("Joyful");
        } else if (this.sadness > 50) {
            this.setMood("Sad");
        } else if (this.madness > 50) {
            this.setMood("Mad");
        } else if (this.happiness > 50) {
            this.setMood("Happy");
        } else if (this.sadness > this.madness && this.sadness > this.happiness) {
            this.setMood("Pensive");
        } else if (this.happiness > this.madness) {
            this.setMood("Content");
        } else {
            this.setMood("Calm");
        }
    }

    updateFeeling() {
        if (this.health < 30) {
            this.setFeeling("Lonely");
        } else if (this.health > 70 && this.happiness > 50) {
            this.setFeeling("Grateful");
        } else if (this.sadness > 70 && this.sadness >= this.madness && this.sadness >= this.happiness) {
            this.setFeeling("Lonely");
        } else if (this.madness > 70 && this.madness >= this.happiness) {
            this.setFeeling("Angry");
        } else if (this.happiness > 70) {
            this.setFeeling("Grateful");
        } else if (this.sadness > 50) {
            this.setFeeling("Nostalgic");
        } else if (this.madness > 50) {
            this.setFeeling("Frustrated");
        } else if (this.happiness > 50) {
            this.setFeeling("Optimistic");
        } else if (this.sadness > this.madness && this.sadness > this.happiness) {
            this.setFeeling("Pessimistic");
        } else if (this.happiness > this.madness) {
            this.setFeeling("Content");
        } else {
            this.setFeeling("Calm");
        }
    }

    setMood(newMood) {
        if (!this.existingMoods.includes(newMood)) throw new Error("Mood not on list");
        this.mood = newMood;
    }

    setFeeling(newFeeling) {
        if (!this.existingFeelings.includes(newFeeling)) throw new Error("Feeling not on list");
        this.feeling = newFeeling;
    }

    listMoods() {
        console.log("List of moods:");
        console.log(this.existingMoods);
    }

    listFeelings() {
        console.log("List of feelings:");
        console.log(this.existingFeelings);
    }
}

class Human {
    constructor(hc = new HumanCore()) {
        this.hc = hc;
    }

    get mood() {
        return this.hc.mood;
    }

    get feeling() {
        return this.hc.feeling;
    }

    get health() {
        return this.hc.health;
    }

    get happiness() {
        return this.hc.happiness;
    }

    get sadness() {
        return this.hc.sadness;
    }

    get madness() {
        return this.hc.madness;
    }
}

class DevTools {
    constructor(hc = new HumanCore(), hum = new Human()) {
        this.hc = hc;
        this.hum = hum;
    }
}

module.exports = { Human, HumanCore };
