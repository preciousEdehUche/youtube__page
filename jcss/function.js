function isWindy(speed, unit) {
  if (speed > 5 && unit === "metric") {
    return true;
  } else {
    return false;
  }
}

let wind = prompt(`what is the wind?`);
let unit = prompt(`what is the unit?`);
if (isWindy(wind, unit)) {
  alert("It is windy");
} else {
  alert("It is not windy");
}
