function temp(degree) {
  alert(`it is 18 degrees`);
  let showTemp = document.querySelector("button");
  showTemp.innerHTML = " 18 degrees";
}

let button = document.querySelector("button");
button.addEventListener("click", temp);
