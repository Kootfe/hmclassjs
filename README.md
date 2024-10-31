# Human AI JavaScript Class

## Version
0.0.2 - Moods, Feelings, Health and Stats update. 

## Overview
The `HumanCore` class simulates human moods and emotions, providing methods to manage health, moods, and feelings. This class serves as a basic framework for creating an AI representation of a human with emotional attributes. It includes methods for setting and listing moods and feelings. The `Human` class acts as a wrapper to interact with `HumanCore`, while the `DevTools` class provides a way to access both core functionalities and the human instance. This project allows you to manage health status from 0 to 100%, set and retrieve various moods and feelings, and list all existing moods and feelings. Notably, the moods and feelings are influenced by the health, happiness, sadness, and madness levels of the AI representation.

To get started, ensure you have Node.js installed on your machine. You can clone this repository or simply copy the code into your own JavaScript file. To clone the repository, use the following commands in your terminal:

```bash
git clone https://github.com/Kootfe/hmclassjs.git
cd hmclass
npm init -y
```


To use:
```js
const { Human, HumanCore } = require('./path_to_your_file');

const humanCoreInstance = new HumanCore(100, 50, 80, 20);
const humanInstance = new Human(humanCoreInstance);

// Access health, mood, and feeling
console.log(humanInstance.health); // "100%"
console.log(humanInstance.mood); // Initial mood based on health and happiness
console.log(humanInstance.feeling); // Initial feeling based on health and happiness

// Update mood and feeling
humanCoreInstance.updateMood();
humanCoreInstance.updateFeeling();

// List existing moods and feelings
humanCoreInstance.listMoods();
humanCoreInstance.listFeelings();
```

The `HumanCore` class has several properties, including `existingMoods`, which is an array of predefined moods, and `existingFeelings`, which is an array of predefined feelings. Additionally, it includes properties for `health`, `madness`, `happiness`, and `sadness`, each of which has a value between 0 and 100%. The class contains methods to update the current mood and feeling based on these health-related properties. For instance, the `updateMood()` method adjusts the mood according to the health, happiness, sadness, and madness levels, while the `updateFeeling()` method does the same for feelings. You can set the current mood or feeling using the `setMood(newMood)` and `setFeeling(newFeeling)` methods, ensuring that the specified mood or feeling exists in the predefined list. You can also list all existing moods and feelings using the `listMoods()` and `listFeelings()` methods.

The `Human` class serves as a convenient wrapper around `HumanCore`, allowing easy access to its properties and methods. The `DevTools` class offers a way to work with instances of both `HumanCore` and `Human`, making it easier to manage and manipulate their functionalities.

Contributions to this project are welcome! Feel free to submit issues or pull requests on GitHub. This project is licensed under the ISC License.


This version maintains a more narrative flow without explicit section headers, providing a seamless reading experience. Let me know if you need further adjustments!
