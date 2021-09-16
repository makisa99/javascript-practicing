// document.getElementById("counter-in").innerText = 5;
let count = 0;
let cntr = document.getElementById("counter-in");
let savebtn;

function increment() {
  count++;
  cntr.innerText = count;
}

function save() {
  savebtn = document.getElementById("saved");
  savebtn.innerText = savebtn.innerHTML + count + " ";
  count = 0;
  cntr.innerText = count;
}
