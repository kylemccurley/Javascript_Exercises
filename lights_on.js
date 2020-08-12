function lightsOn(switches) {
  let lights = initializeLights(switches);
  for (let div = 1; div <= switches; div++) {
    toggleEveryNthLight(div);
  }

  function logIdxOfLights() {
    let toggledLightIdx = []
    for (let i = 0; i < lights.length; i++) {
      let el = lights[i];
      if (el) {
        toggledLightIdx.push(i + 1);
      }
    }

    return toggledLightIdx;
  }


  function toggleEveryNthLight(n) {
    for (let i = n; i <= lights.length; i += n) {
      lights[i - 1] = (!!lights[i - 1]) ? false : true;
    }
  }

  function initializeLights(n) {
    let outcome = [];
    for (let i = 0; i < n; i++) {
      outcome.push(false);
    }

    return outcome;
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
