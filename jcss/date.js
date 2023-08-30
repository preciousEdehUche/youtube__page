let currentTime = new Date();
console.log(currentTime);
console.log(currentTime.getMilliseconds());
console.log(currentTime.getDay());
console.log(currentTime.getFullYear());
console.log(currentTime.getMonth());

// console.log(date)

function formatDate(date) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[date.getDay()];
  let month = months[date.getMonth()];
  let theDate = date.getDate();
  let year = date.getFullYear();

  let formattedDate = `Today is ${day}, ${month} ${theDate}, ${year}`;
  return formattedDate;
}

console.log(formatDate(currentTime));
