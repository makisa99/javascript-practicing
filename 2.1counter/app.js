let count = 0;

let valueEl = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      valueEl.style.color = "green";
    } else if (count < 0) {
      valueEl.style.color = "red";
    } else {
      valueEl.style.color = "#222";
    }

    valueEl.textContent = count;
  });
});
