function dms(degrees) {
  DEGREES_IN_A_MINUTE = 60;
  SECONDS_IN_A_MINUTE = 60;
  let roundedDegrees = Math.floor(degrees);
  let minutes =  DEGREES_IN_A_MINUTE * (degrees - roundedDegrees);
  let seconds = SECONDS_IN_A_MINUTE * (minutes % 1);
  console.log(`${roundedDegrees}°${trimNum(minutes)}'${trimNum(seconds)}"`);

  function trimNum(num) {
    let numStr = String(Math.floor(num));
    if (numStr.length == 1) {
      return `0${numStr}`;
    } else {
      return numStr;
    }
  }
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
