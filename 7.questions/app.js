//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (qstn) {
  const btn = qstn.querySelector(".question-btn");
  //   console.log(btn);
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== qstn) {
        item.classList.remove("show-text");
      }
    });
    qstn.classList.toggle("show-text");
  });
});

// // traversing the dom
// let questionBtns = document.querySelectorAll(".question-btn");

// questionBtns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     // console.log(
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//     // );
//   });
// });
