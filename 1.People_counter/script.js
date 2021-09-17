// document.getElementById("counter-in").innerText = 5;
let count = 0;
let cntr = document.getElementById("counter-in");
let saveh2 = document.getElementById("saved");

function increment() {
  count++;
  cntr.textContent = count;
}

function save() {
  saveh2.textContent += " " + count;
  count = 0;
  cntr.textContent = count;
}
