function handleClickLesson1() {
  // SHOW LEESON 1 AND HIDE LESSON 5 - 7
  document.querySelector("#myTab").classList.remove("hidden");
  document.querySelector("#myTab2").classList.add("hidden");
  document.querySelector("#myTab3").classList.add("hidden");

  //   ADD ACTIVE FOR "Javacript lesson 1" REmove acctive " Javacript lesson 5" and " Javacript lesson 7"
  document.querySelector("#lesson5 h5").classList.remove("text-white");
  document.querySelector("#lesson7 h5").classList.remove("text-white");

  document.querySelector("#lesson1 h5").classList.remove("text-custom_gray");
  document.querySelector("#lesson1 h5").classList.add("text-white");

  //   Remove all active title at lession 5 -7 . Then show active title Ex1 at lesson 1
  document.querySelectorAll(".nav-link-lesson5").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelectorAll(".nav-link-lesson7").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelector("#lesson1 .Ex1").classList.add("active");

  //   Remove all active content at lession 5 - 7. Then show active Ex1 at lesson1
  document.querySelectorAll(".JS5").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelectorAll(".JS7").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelector(".lesson1-Ex1").classList.add("active");
  document.querySelector(".lesson1-Ex1").classList.add("show");
  //   console.log(document.querySelector(".lesson1-Ex1"));
}

function handleClickLesson5() {
  // SHOW LEESON 5 AND HIDE LESSON 1 - 7
  document.querySelector("#myTab").classList.add("hidden");
  document.querySelector("#myTab3").classList.add("hidden");
  document.querySelector("#myTab2").classList.remove("hidden");

  //   ADD ACTIVE FOR "Javacript lesson 5" REmove acctive " Javacript lesson 1" and " Javacript lesson 7"
  document.querySelector("#lesson5 h5").classList.add("text-white");
  document.querySelector("#lesson1 h5").classList.add("text-custom_gray");
  document.querySelector("#lesson1 h5").classList.remove("text-white");
  document.querySelector("#lesson7 h5").classList.remove("text-white");

  //   Remove all active title at lession 1 - 7 . Then show active title Ex1 at lesson 5
  document.querySelectorAll(".nav-link-lesson1").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelectorAll(".nav-link-lesson7").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelector("#lesson5 .Ex1").classList.add("active");

  //   Remove all active content at lession 1 - 7. Then show active Ex1 at lesson5
  document.querySelectorAll(".JS1").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelectorAll(".JS7").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelector(".lesson5-Ex1").classList.add("active");
  document.querySelector(".lesson5-Ex1").classList.add("show");
}

function handleClickLesson7() {
  // SHOW LEESON 7 AND HIDE LESSON 1 - LESSON 5
  document.querySelector("#myTab").classList.add("hidden");
  document.querySelector("#myTab2").classList.add("hidden");
  document.querySelector("#myTab3").classList.remove("hidden");

  //   ADD ACTIVE FOR "Javacript lesson 7" REmove acctive " Javacript lesson 1" "Javacript lesson 5"
  document.querySelector("#lesson7 h5").classList.add("text-white");
  document.querySelector("#lesson5 h5").classList.remove("text-white");
  document.querySelector("#lesson1 h5").classList.remove("text-white");
  document.querySelector("#lesson1 h5").classList.add("text-custom_gray");

  //   Remove all active title at lession 1 - 5. Then show active title Ex1 at lesson 7
  document.querySelectorAll(".nav-link-lesson1").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelectorAll(".nav-link-lesson5").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelector("#lesson7 .Ex1").classList.add("active");

  //   Remove all active content at lession 1 - 5. Then show active Ex1 at lesson7
  document.querySelectorAll(".JS1").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelectorAll(".JS5").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelector(".lesson7-Ex1").classList.add("active");
  document.querySelector(".lesson7-Ex1").classList.add("show");
}
