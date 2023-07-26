// ------------------------JAVASCRIPT BUOI 1 -----------------------------------------
// ------------------------JAVASCRIPT BUOI 1 -----------------------------------------
// ------------------------JAVASCRIPT BUOI 1 -----------------------------------------
function validate(tag, message) {
  tag.innerText = message;
}

function resetValidate(tag) {
  tag.innerText = "";
}

function resetInput(tag) {
  tag.value = "";
}

function printResult(tag, result) {
  tag.innerHTML = result;
}

function numberWithCommas(money) {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// ----------BAI TAP 1 -----------
function handleEx1() {
  var workDaysInput = document.getElementById("workDays");
  var workDays = workDaysInput.value;
  var resultTag = document.getElementById("result-bt1");
  var textValidation = document.getElementById("validation-bt1");
  //   validation
  if (workDays === "" || workDays === null || workDays === undefined) {
    validate(
      textValidation,
      "* Số ngày làm việc không được để trống và phải là số hoặc không đúng đinh dạng"
    );
    printResult(resultTag, "");
    return;
  }

  if (workDays <= 0 || workDays % 1 !== 0) {
    validate(textValidation, "* Số ngày làm việc phải là số nguyên dương.");
    printResult(resultTag, "");
    return;
  }

  // ACCEPT VALUE -  CACULATION & CONVERT SALARY INTO MONEY WITH "," SEPERATED
  resetValidate(textValidation);
  var salary = numberWithCommas(workDays * 100000);

  //   PRINT RESULT
  printResult(resultTag, salary);

  //   RESET INPUT
  resetInput(workDaysInput);
}

// ----------BAI TAP 2 -----------
function handleEx2() {
  var realNum1Input = document.getElementById("realNum1");
  var realNum2Input = document.getElementById("realNum2");
  var realNum3Input = document.getElementById("realNum3");
  var realNum4Input = document.getElementById("realNum4");
  var realNum5Input = document.getElementById("realNum5");

  var realNum1 = realNum1Input.value;
  var realNum2 = realNum2Input.value;
  var realNum3 = realNum3Input.value;
  var realNum4 = realNum4Input.value;
  var realNum5 = realNum5Input.value;

  var textValidation2 = document.getElementById("validation-bt2");
  var resultTag2 = document.getElementById("result-bt2");

  //  validation
  if (
    realNum1 === "" ||
    realNum1 === null ||
    realNum1 === undefined ||
    realNum2 === "" ||
    realNum2 === null ||
    realNum2 === undefined ||
    realNum3 === "" ||
    realNum3 === null ||
    realNum3 === undefined ||
    realNum4 === "" ||
    realNum4 === null ||
    realNum4 === undefined ||
    realNum5 === "" ||
    realNum5 === null ||
    realNum5 === undefined
  ) {
    validate(textValidation2, "* Số thực không được để trống.");
    printResult(resultTag2, "");
    return;
  }

  // ACCEPT VALUE - CONVERT VALUE INTO NUMBER
  resetValidate(textValidation2);
  realNum1 = Number(realNum1);
  realNum2 = Number(realNum2);
  realNum3 = Number(realNum3);
  realNum4 = Number(realNum4);
  realNum5 = Number(realNum5);

  //Caculation
  var average = (realNum1 + realNum2 + realNum3 + realNum4 + realNum5) / 5;

  //   PRINT RESULT
  printResult(resultTag2, average);

  //   RESET INPUT
  resetInput(realNum1Input);
  resetInput(realNum2Input);
  resetInput(realNum3Input);
  resetInput(realNum4Input);
  resetInput(realNum5Input);
}

// ----------BAI TAP 3 -----------
function handleEx3() {
  var usdInput = document.getElementById("usd");
  var usd = usdInput.value;
  var textValidation3 = document.getElementById("validation-bt3");
  var resultTag3 = document.getElementById("result-bt3");
  // Validation
  if (usd === "" || usd === null || usd === undefined) {
    validate(textValidation3, "* Số tiền USD không được để trống.");
    printResult(resultTag3, "");
    return;
  }

  if (Number(usd) <= 0) {
    validate(textValidation3, "* Số tiền USD không được bé hơn hoặc bằng 0.");
    printResult(resultTag3, "");
    return;
  }

  // ACCEPT VALUE - CONVERT VALUE INTO NUMBER
  resetValidate(textValidation3);
  usd = Number(usd);

  //Caculation
  var vnd = numberWithCommas(usd * 23500);

  //   PRINT RESULT
  printResult(resultTag3, vnd);

  //   RESET INPUT
  resetInput(usdInput);
}

// ----------BAI TAP 4 -----------

function handleEx4() {
  var heightInput = document.getElementById("height");
  var widthInput = document.getElementById("width");
  var height = heightInput.value;
  var width = widthInput.value;

  var textValidation4 = document.getElementById("validation-bt4");
  var resultTag4 = document.getElementById("result-bt4");
  // Validation
  if (
    height === "" ||
    height === null ||
    height === undefined ||
    width === "" ||
    width === null ||
    width === undefined
  ) {
    validate(textValidation4, "* Chiều dài và chiều rộng không được để trống.");
    printResult(resultTag4, "");
    return;
  }

  if (Number(height) <= 0 || Number(width) <= 0) {
    validate(textValidation4, "* Chiều dài và chiều rộng phải lớn hơn không.");
    printResult(resultTag4, "");
    return;
  }

  // ACCEPT VALUE - CONVERT VALUE INTO NUMBER
  resetValidate(textValidation4);
  height = Number(height);
  width = Number(width);

  //Caculation
  var S = height * width;
  var C = (height + width) * 2;

  //   PRINT RESULT
  printResult(resultTag4, `Chu vi và diện tích lần lượt là: ${C} và ${S}`);

  //   RESET INPUT
  resetInput(heightInput);
  resetInput(widthInput);
}

// ----------BAI TAP 5 -----------
function handleEx5() {
  var XXNumberInput = document.getElementById("number-ex5");
  var XXNumber = XXNumberInput.value;

  var textValidation5 = document.getElementById("validation-bt5");
  var resultTag5 = document.getElementById("result-bt5");
  // Validation
  if (XXNumber === "" || XXNumber === null || XXNumber === undefined) {
    validate(textValidation5, "* Số không được để trống");
    printResult(resultTag5, "");
    return;
  }

  if (Number(XXNumber) < 10 || Number(XXNumber) >= 100) {
    validate(textValidation5, "* Số phải lớn hơn hoặc bằng 10 và bé hơn 100.");
    printResult(resultTag5, "");
    return;
  }

  if (Number(XXNumber) % 1 !== 0) {
    validate(textValidation5, "* Số thập phân không được chấp nhận.");
    printResult(resultTag5, "");
    return;
  }

  // ACCEPT VALUE - CONVERT VALUE INTO NUMBER
  resetValidate(textValidation5);
  XXNumber = Number(XXNumber);

  //Caculation
  var tens = Math.floor(XXNumber / 10);
  var unit = XXNumber % 10;

  var sum = tens + unit;

  //   PRINT RESULT
  printResult(resultTag5, sum);

  //   RESET INPUT
  resetInput(XXNumberInput);
}

// ------------------------JAVASCRIPT BUOI 5 -----------------------------------------
// ------------------------JAVASCRIPT BUOI 5 -----------------------------------------
// ------------------------JAVASCRIPT BUOI 5 -----------------------------------------

// ----------BAI TAP 1 -----------

function handleEx1L5() {
  const standardInput = document.querySelector("#standard");
  const subject1Input = document.querySelector("#subject1");
  const subject2Input = document.querySelector("#subject2");
  const subject3Input = document.querySelector("#subject3");
  const areaInput = document.querySelector("#area");
  const targetInput = document.querySelector("#target");

  const standard = standardInput.value * 1;
  const subject1 = subject1Input.value * 1;
  const subject2 = subject2Input.value * 1;
  const subject3 = subject3Input.value * 1;
  const area = areaInput.value * 1;
  const target = targetInput.value * 1;

  const textValidation = document.querySelector("#validation-bt1-l5");
  const resultTag = document.querySelector("#result-bt1-l5");

  // Check input
  if (
    standardInput.value === "" ||
    subject1Input.value === "" ||
    subject2Input.value === "" ||
    subject3Input.value === ""
  ) {
    validate(
      textValidation,
      "*Tất cả các trường là bắt buộc, không được để trống"
    );
    printResult(resultTag, "");
    return;
  }

  // validation
  if (standard < 0 || subject1 < 0 || subject2 < 0 || subject3 < 0) {
    validate(textValidation, "* Điểm không thể nhỏ hơn 0.");
    printResult(resultTag, "");
    return;
  }

  // ACCEPT INPUT VALUE - RESET VALIDATION & CACULATE
  resetValidate(textValidation);

  let result = "";
  if (subject1 === 0 || subject2 === 0 || subject3 === 0) {
    result = "FAIL";
    printResult(resultTag, result);
    return;
  }

  const total = subject1 + subject2 + subject3 + area + target;

  if (total >= standard) {
    result = "PASS";
  } else {
    result = "FAIL";
  }

  //   PRINT RESULT
  printResult(
    resultTag,
    `${result} <span id="explain" class="text-gray-300 block"> Điểm tổng kết là: ${total} (Điểm ưu tiên theo khu vực là: ${area};
    Điểm ưu tiên theo đối tượng là: ${target})</span>`
  );
}

// ----------BAI TAP 2 -----------

function handleEx2L5() {
  const name = document.querySelector("#name");
  const KwInput = document.querySelector("#Kw");

  const textValidation = document.querySelector("#validation-bt2-l5");
  const resultTag = document.querySelector("#result-bt2-l5");

  const Kw = KwInput.value * 1;

  // VALIDATOIN
  if (name.value === "" || KwInput.value === "") {
    validate(
      textValidation,
      "*Tất cả các trường là bắt buộc, không được để trống"
    );
    printResult(resultTag, "");
    return;
  }

  if (Kw <= 0) {
    validate(textValidation, "*Số Kw phải lớn hơn 0.");
    printResult(resultTag, "");
    return;
  }

  // ACCEPT INPUT VALUE - RESET VALIDATION & CACULATE
  resetValidate(textValidation);
  let total = 0;
  if (Kw <= 50) {
    total = Kw * 500;
  } else if (Kw <= 100) {
    total = 50 * 500 + (Kw - 50) * 650;
  } else if (Kw <= 200) {
    total = 50 * 500 + 50 * 650 + (Kw - 100) * 850;
  } else if (Kw <= 350) {
    total = 50 * 500 + 50 * 650 + 100 * 850 + (Kw - 200) * 1100;
  } else {
    total = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (Kw - 350) * 1300;
  }

  //   PRINT RESULT
  printResult(
    resultTag,
    `Chủ hộ ${name.value} cần phải thanh toán: ${numberWithCommas(total)}`
  );
}

// ----------BAI TAP 3 -----------
let isDemo = false;
function handleTonggle() {
  if (!isDemo) {
    document
      .querySelector(".tonggle__button p")
      .classList.remove("text-gray-300");
    document
      .querySelector(".tonggle__button > div")
      .classList.remove("bg-gray-200]");
    document
      .querySelector(".tonggle__button > div")
      .classList.remove("before:left-[5px]");
    document
      .querySelector(".tonggle__button > div")
      .classList.add("bg-green-400");
    document
      .querySelector(".tonggle__button > div")
      .classList.add("before:left-[35px]");
    isDemo = true;
  } else {
    document.querySelector(".tonggle__button p").classList.add("text-gray-300");
    document
      .querySelector(".tonggle__button > div")
      .classList.add("bg-gray-200]");
    document
      .querySelector(".tonggle__button > div")
      .classList.add("before:left-[5px]");
    document
      .querySelector(".tonggle__button > div")
      .classList.remove("bg-green-400");
    document
      .querySelector(".tonggle__button > div")
      .classList.remove("before:left-[35px]");
    isDemo = false;
  }
}

console.log(isDemo);
function handleEx3L5() {
  const fullName = document.querySelector("#fullName").value;
  const incomeInput = document.querySelector("#income");
  const dependencyInput = document.querySelector("#dependency");
  const textValidation = document.querySelector("#validation-bt3-l5");
  const resultTag = document.querySelector("#result-bt3-l5");

  const income = incomeInput.value * 1;
  const dependency = dependencyInput.value * 1;

  // VALIDATION
  if (
    fullName === "" ||
    incomeInput.value === "" ||
    dependencyInput.value === ""
  ) {
    validate(
      textValidation,
      "*Tất cả các trường là bắt buộc, không được để trống"
    );
    printResult(resultTag, "");
    return;
  }
  if (dependency < 0 || income < 0) {
    validate(
      textValidation,
      "*Thu nhập năm và số người phụ thuộc không thể là số âm."
    );
    printResult(resultTag, "");
    return;
  }

  if (dependency % 1 !== 0) {
    validate(textValidation, "*Số người phụ thuộc không thể là số thập phân.");
    printResult(resultTag, "");
    return;
  }
  // ACCEPT INPUT VALUE - RESET VALIDATION & CACULATE
  resetValidate(textValidation);
  const incomeTaxes = income - 4000000 - dependency * 1600000;
  let taxes = 0;
  if (incomeTaxes <= 0) {
    //   PRINT RESULT
    printResult(
      resultTag,
      `${taxes} VND - Bạn không cần đóng thuế<span id="explain" class="text-gray-300 block">Thu nhập chịu thuế của bạn đang là ${numberWithCommas(
        incomeTaxes
      )} VND</span>`
    );
    return;
  }
  const shortIncomeTaxes = incomeTaxes / 1000000;
  if (!isDemo) {
    if (shortIncomeTaxes <= 60) {
      taxes = (shortIncomeTaxes * 5) / 100;
    } else if (shortIncomeTaxes <= 120) {
      taxes = (60 * 5) / 100 + ((shortIncomeTaxes - 60) * 10) / 100;
    } else if (shortIncomeTaxes <= 210) {
      taxes =
        (60 * 5) / 100 +
        (60 * 10) / 100 +
        ((shortIncomeTaxes - 120) * 15) / 100;
    } else if (shortIncomeTaxes <= 384) {
      taxes =
        (60 * 5) / 100 +
        (60 * 10) / 100 +
        (90 * 15) / 100 +
        ((shortIncomeTaxes - 210) * 20) / 100;
    } else if (shortIncomeTaxes <= 624) {
      taxes =
        (60 * 5) / 100 +
        (60 * 10) / 100 +
        (90 * 15) / 100 +
        (174 * 20) / 100 +
        ((shortIncomeTaxes - 384) * 25) / 100;
    } else if (shortIncomeTaxes <= 960) {
      taxes =
        (60 * 5) / 100 +
        (60 * 10) / 100 +
        (90 * 15) / 100 +
        (174 * 20) / 100 +
        (240 * 25) / 100 +
        ((shortIncomeTaxes - 624) * 30) / 100;
    } else {
      taxes =
        (60 * 5) / 100 +
        (60 * 10) / 100 +
        (90 * 15) / 100 +
        (174 * 20) / 100 +
        (240 * 25) / 100 +
        (336 * 30) / 100 +
        ((shortIncomeTaxes - 960) * 35) / 100;
    }
  }

  if (isDemo) {
    if (shortIncomeTaxes <= 60) {
      taxes = (shortIncomeTaxes * 5) / 100;
    } else if (shortIncomeTaxes <= 120) {
      taxes = (shortIncomeTaxes * 10) / 100;
    } else if (shortIncomeTaxes <= 210) {
      taxes = (shortIncomeTaxes * 15) / 100;
    } else if (shortIncomeTaxes <= 384) {
      taxes = (shortIncomeTaxes * 20) / 100;
    } else if (shortIncomeTaxes <= 624) {
      taxes = (shortIncomeTaxes * 25) / 100;
    } else if (shortIncomeTaxes <= 960) {
      taxes = (shortIncomeTaxes * 30) / 100;
    } else {
      taxes = (shortIncomeTaxes * 35) / 100;
    }
  }

  //   PRINT RESULT
  printResult(
    resultTag,
    `${(taxes * 1000000).toLocaleString()} VND - Tính theo ${
      isDemo ? "Demo code" : "thực tế"
    }<span id="explain" class="text-gray-300 block">Thu nhập chịu thuế của ${fullName} là: ${numberWithCommas(
      Math.floor(incomeTaxes)
    )} VND</span>`
  );
}

// ----------BAI TAP 4 -----------
const connectInput = document.querySelector("#connect");

let type = document.querySelector("#type").value * 1;

// Disable connect for personal users
if (type == 1) {
  connectInput.removeAttribute("disabled");
  connectInput.classList.remove("cursor-not-allowed");
  connectInput.classList.remove("text-gray-300");
} else {
  connectInput.setAttribute("disabled", "true");
  connectInput.classList.add("cursor-not-allowed");
  connectInput.classList.add("text-gray-300");
}

function handleChangeType(e) {
  if (e.target.value == 1) {
    connectInput.removeAttribute("disabled");
    connectInput.classList.remove("cursor-not-allowed");
    connectInput.classList.remove("text-gray-300");
  } else {
    connectInput.setAttribute("disabled", "true");
    connectInput.classList.add("cursor-not-allowed");
    connectInput.classList.add("text-gray-300");
  }
  return e.target.value;
}

function handleEx4L5() {
  const code = document.querySelector("#code").value;
  const channelInput = document.querySelector("#channel");

  const connect = connectInput.value * 1;
  const channel = channelInput.value * 1;

  const textValidation = document.querySelector("#validation-bt4-l5");
  const resultTag = document.querySelector("#result-bt4-l5");
  type = document.querySelector("#type").value * 1;
  let textType = "Nhà dân";
  if (type == 1) {
    textType = "Doanh nghiệp";
  }

  //VALIDATION

  if (type == 1) {
    if (code === "" || channelInput.value === "" || connectInput.value === "") {
      validate(
        textValidation,
        "*Tất cả các trường là bắt buộc, không được để trống"
      );
      printResult(resultTag, "");
      return;
    }
  } else {
    if (code === "" || channelInput.value === "") {
      validate(
        textValidation,
        "*Tất cả các trường là bắt buộc, không được để trống"
      );
      printResult(resultTag, "");
      return;
    }
  }

  if (type == 1) {
    if (channel <= 0 || connect <= 0) {
      validate(
        textValidation,
        "*Số kết nối và số kênh cao cấp của doanh nghiệp không thể bé hơn hoặc bằng 0"
      );
      printResult(resultTag, "");
      return;
    }
  } else {
    if (channel <= 0) {
      validate(textValidation, "*Số kênh cao cấp không thể bé hơn hoặc bằng 0");
      printResult(resultTag, "");
      return;
    }
  }

  if (type == 1) {
    if (channel % 1 !== 0 || connect % 1 !== 0) {
      validate(
        textValidation,
        "*Số kết nối và số kênh cao cấp của doanh nghiệp phải là số nguyên"
      );
      printResult(resultTag, "");
      return;
    }
  } else {
    if (channel % 1 !== 0) {
      validate(textValidation, "*Số kênh cao cấp phải là số nguyên");
      printResult(resultTag, "");
      return;
    }
  }

  // ACCEPT INPUT VALUE - RESET VALIDATION & CACULATE
  resetValidate(textValidation);
  let total = 0;

  switch (type) {
    case 1:
      connect <= 10
        ? (total = 15 + 75 + 50 * channel)
        : (total = 15 + 75 + (connect - 10) * 5 + 50 * channel);

      //   PRINT RESULT
      printResult(
        resultTag,
        `${total} $ <span id="explain" class="text-gray-300 block">Loại khách hàng: ${textType} - ${code}</span>`
      );
      break;

    default:
      total = 4.5 + 20.5 + 7.5 * channel;
      //   PRINT RESULT
      printResult(
        resultTag,
        `${total} $ <span id="explain" class="text-gray-300 block">Loại khách hàng: ${textType} - ${code}</span>`
      );
      break;
  }
}
