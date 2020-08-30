/*
You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.
--------------------------------------------------------------
Input: The total number of switches
Output: Array of all lights that are on after n repetitions

Rules/Requirements:
  - How to calculate/iterate through each element:
    - First Pass: Toggle every 1st switch (1, 2, 3, 4, 5)
    - Second Pass: Toggle every 2nd switch (2, 4, 6, 8)
    - Third Pass: Toggle every 3rd switch (3, 6, 9)
    ...
    - Ninth Pass: Every 9th switch (9)
  - Every Toggle: Switching state
  - Stop iteration at the nth reptition
  - Lights are represented as a number

Data Structure:
  - Hash: For State Tracking:
    1 => 'on'
    2 => 'off'
  - Boolean: State Representation

Algorithm: Given a number representing the number of switches: n
  - Generate a hash of lights upto n:
    - State must be off for all lights
  
  Toggle Every Nth Light:
  - Iterate from 1 upto n: |nth| (1..n)
    - Toggle every nth light (light num (key) % nth === 0?)
      - 'on'? => 'off'
      - 'off'? => 'on'

  - Find all lights that are on:
    - Search for a true value:
      - Add the (index + 1) of the true value to a new array

  - Return the calculated array of lights that are on
*/

function lightsOn(switches) {
  // initialize lights
  // Iterate from 1 to switches: |nth|
    // Toggle nth lights
  // Find all keys of the hash with a value of 'off'

  let lights = initializeLights(switches);
  for (let toggleNum = 1; toggleNum <= switches; toggleNum++) {
    lights = toggleEveryNthLight(toggleNum);
  }

  console.log(lightsOn(lights));

  function initializeLights(n) {
    let lights = {};
    for (let lightNum = 1; lightNum <= n; lightNum++) {
      lights[lightNum] = 'off';
    }

    return lights;
  }

  function toggleEveryNthLight(nth) {
    let toggledLights = {};
    for (let [light, state] of Object.entries(lights)) {
      if (light % nth === 0) {
        toggledLights[light] = toggle(state);
      } else {
        toggledLights[light] = state;
      }
    }

    return toggledLights;

    function toggle(state) {
      return state === 'off' ? 'on' : 'off';
    }
  }

  function lightsOn(hsh) {
    let lightsOn = [];
    for (let [light, state] of Object.entries(hsh)) {
      if (state === 'on') {
        lightsOn.push(Number(light));
      }
    }

    return lightsOn;
  }
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
