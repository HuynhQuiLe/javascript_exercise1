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
  tag.innerText = result;
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
