// function question() {
//   let ques = prompt(`what is the speed of wind in your city?`);
// }
// function isWindy(speed) {
//   question(wind);
//   if (speed > 5) {
//     alert("it is windy");
//   } else {
//     alert("it is not windy");
//   }
// }
// isWindy();
// isWindy(6)
function isWindy(speed) {
  if (speed > 5) {
    alert("it is windy");
  } else {
    alert(`it is not windy`);
  }
}
// let speed = 6;
isWindy(prompt(`what is the wind speed in your city?`));
