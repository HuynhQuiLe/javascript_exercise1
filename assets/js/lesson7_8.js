let numberArray = [];
let realArray = [];

let showArrayText = "";
let isEx1 = false;
let isEx2 = false;
let isEx3 = false;
let isEx4 = false;
let isEx5 = false;
let isEx7 = false;
let isEx8 = false;
let isEx10 = false;

function handleAddNumber() {
  const numbeInput = document.querySelector("#interger");
  const error = document.querySelector("#validation-bt1-l7");
  const showArray = document.querySelector("#arrayNumber");

  const number = numbeInput.value * 1;
  //   check validation
  if (numbeInput.value === "") {
    error.innerHTML = "* Đây là trường bắt buộc, không được để trống.";
    return;
  }
  if (number % 1 !== 0) {
    error.innerHTML = "* Vui long nhập số nguyên.";
    return;
  }
  //   allow input data
  error.innerHTML = "";

  //   push array
  numberArray.push(number);

  numberArray.length === 1
    ? (showArrayText += `${number}`)
    : (showArrayText += `, ${number}`);

  showArray.innerHTML = showArrayText;
  //reset input
  numbeInput.value = "";

  if (numberArray.length > 0) {
    document.querySelector("#problems").classList.remove("hidden");
  } else {
    document.querySelector("#problems").classList.add("hidden");
  }

  if (isEx1) {
    handleProblem1();
  }

  if (isEx2) {
    handleProblem2();
  }

  if (isEx3) {
    handleProblem3();
  }

  if (isEx4) {
    handleProblem4();
  }

  if (isEx5) {
    handleProblem5();
  }

  if (isEx7) {
    handleProblem7();
  }

  if (isEx8) {
    handleProblem8();
  }

  if (isEx10) {
    handleProblem10();
  }
}

function handleProblem1() {
  isEx1 = true;
  document.querySelector(".result-l7-1").classList.remove("hidden");
  let sum = 0;
  numberArray.forEach((number) => {
    number > 0 ? (sum += number) : sum;
  });
  document.querySelector(
    "#result-bt1-l7"
  ).innerHTML = `1. Tổng các số dương trong mảng: ${sum}`;
}

function handleProblem2() {
  isEx2 = true;
  document.querySelector(".result-l7-2").classList.remove("hidden");
  let count = 0;
  numberArray.forEach((number) => {
    number > 0 ? count++ : count;
  });

  document.querySelector(
    "#result-bt2-l7"
  ).innerHTML = `2. Có ${count} số dương trong mảng.`;
}

function handleProblem3() {
  isEx3 = true;
  document.querySelector(".result-l7-3").classList.remove("hidden");
  const min = Math.min(...numberArray);

  document.querySelector(
    "#result-bt3-l7"
  ).innerHTML = `3. Số nhỏ nhất trong mảng: ${min}`;
}

function handleProblem4() {
  isEx4 = true;
  document.querySelector(".result-l7-4").classList.remove("hidden");
  let positiveNumberArray = [];
  numberArray.forEach((number) => {
    if (number > 0) {
      positiveNumberArray.push(number);
    }
  });

  const min = Math.min(...positiveNumberArray);

  document.querySelector(
    "#result-bt4-l7"
  ).innerHTML = `4. Số dương nhỏ nhất trong mảng: ${min}`;
}

function handleProblem5() {
  isEx5 = true;
  document.querySelector(".result-l7-5").classList.remove("hidden");

  let soChanArray = [];

  numberArray.forEach((number) => {
    if (number % 2 === 0) {
      soChanArray.push(number);
    }
  });

  document.querySelector(
    "#result-bt5-l7"
  ).innerHTML = `5. Số chẵn cuối cùng trong mảng: ${
    soChanArray.length > 0 ? soChanArray[soChanArray.length - 1] : -1
  }`;
}

function handleProblem6() {
  const p1Input = document.querySelector("#p1");
  const p2Input = document.querySelector("#p2");
  const error = document.querySelector("#validation-bt6-l7");

  const p1 = p1Input.value * 1;
  const p2 = p2Input.value * 1;

  //   validation
  if (p1Input.value === "" || p2Input.value === "") {
    error.innerHTML = "* Tất cả các trường không được để trống.";
    return;
  }

  if (p1 < 0 || p2 < 0) {
    error.innerHTML = "* Vị trí không được bé hơn 0.";
    return;
  }

  if (p1 >= numberArray.length || p2 >= numberArray.length) {
    error.innerHTML = "* Vị trí vượt quá độ dài của mảng";
    return;
  }

  if (p1 === p2) {
    error.innerHTML = "* Hai vị trí không được trùng nhau";
    return;
  }

  //accpet input data
  error.innerHTML = "";
  document.querySelector(".result-l7-6").classList.remove("hidden");

  //   lay gia tri vitri 2 dua qua vi tri 1 va lay duoc gia tri 1
  var valueP1 = numberArray.splice(p1, 1, numberArray[p2]);
  numberArray.splice(p2, 1, valueP1[0]);
  const newArray = numberArray;

  let showText = "";

  newArray.forEach((number, index) => {
    showText += index > 0 ? `, ${number}` : `${number}`;
  });

  document.querySelector(
    "#result-bt6-l7"
  ).innerHTML = `6. Mảng sau khi đổi 2 vị trí là: ${showText}`;
}

function handleProblem7() {
  isEx7 = true;
  document.querySelector(".result-l7-7").classList.remove("hidden");
  const newArray = numberArray.sort((a, b) => {
    return a - b;
  });

  let showText = "";

  newArray.forEach((number, index) => {
    showText += index > 0 ? `, ${number}` : `${number}`;
  });

  document.querySelector(
    "#result-bt7-l7"
  ).innerHTML = `7. Mảng theo thứ tự tăng dần: ${showText}`;
}

function handleProblem8() {
  isEx8 = true;
  document.querySelector(".result-l7-8").classList.remove("hidden");

  function isPrime(num) {
    for (let start = 2; num > start; start++) {
      if (num % start == 0) {
        return false;
      }
    }
    return num > 1;
  }

  const primeArray = numberArray.filter(isPrime);

  document.querySelector(
    "#result-bt8-l7"
  ).innerHTML = `8. Số nguyên tố đầu tiên trong mảng: ${
    primeArray.length > 0 ? primeArray[0] : -1
  }`;
}

function handleProblem9() {
  const realInput = document.querySelector("#real__number");
  const error = document.querySelector("#validation-bt9-l7");
  const realNumber = realInput.value * 1;

  //   validation
  if (realInput.value === "") {
    error.innerHTML = "* vui lòng khồn để trống";
    return;
  }

  //   allow input data
  error.innerHTML = "";
  realArray.push(realNumber);

  //   show real array

  let showText = "";

  realArray.forEach((number, index) => {
    showText += index > 0 ? `, ${number}` : `${number}`;
  });

  document.querySelector(
    "#showRealNumberArray"
  ).innerHTML = `<div class="flex items-center">
<img
  src="./assets/img/parenthesis.png"
  class="w-[30px] h-[30px] mr-[20px]"
  alt="evaluation"
/>
<p class="font-bold text-[18px]">
  <span
    class="inline-block min-w-[100px] mr-1"
  >
  ${showText}
  </span>
</p>
</div>`;

  realInput.value = "";
}

function handleProblem9Main() {
  const error = document.querySelector("#validation-bt9-l7");

  if (realArray.length === 0) {
    error.innerHTML = "* Vui lòng nhập số thực để tạo mảng";
    return;
  }

  document.querySelector(".result-l7-9").classList.remove("hidden");

  let real = 0;

  realArray.forEach((number) => {
    if (number !== 0) {
      number % 1 === 0 ? real++ : real;
    }
  });

  document.querySelector(
    "#result-bt9-l7"
  ).innerHTML = `9. Trong mảng có ${real} số nguyên`;
}

function handleProblem10() {
  isEx10 = true;
  document.querySelector(".result-l7-10").classList.remove("hidden");
  let duong = 0;
  let am = 0;
  numberArray.forEach((number) => {
    if (number !== 0) {
      number > 0 ? duong++ : am++;
    }
  });
  let compare = "";
  if (duong - am > 0) {
    compare = `Số lượng số dương (${duong}) lớn hơn số lượng số âm (${am}).`;
  } else if (duong - am < 0) {
    compare = `Số lượng số dương (${duong}) bé hơn số lượng số âm (${am}).`;
  } else {
    compare = `Số lượng số dương (${duong})  bằng số lượng số âm (${am}).`;
  }

  document.querySelector("#result-bt10-l7").innerHTML = `10. ${compare}`;
}

function handleClickBT6() {
  document.querySelector(".changePosition").classList.remove("hidden");
  document.querySelector(".realNumber").classList.add("hidden");
}

function handleClickBT9() {
  document.querySelector(".changePosition").classList.add("hidden");
  document.querySelector(".realNumber").classList.remove("hidden");
}
