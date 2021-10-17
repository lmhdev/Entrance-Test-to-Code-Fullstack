// 1. Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích lớn nhất và trả về kết quả của phép nhân 2 số đó.

let inputArray = [2, 3, -5, -2, 4];
let outputArray = [];

const adjacentElementsProduct = (inputArray) => {
  for (let i = 0; i < inputArray.length - 1; i++) {
    outputArray.push(inputArray[i] * inputArray[i + 1]);
  }
  let result = Math.max(...outputArray).toString();
  console.log("Max product: " + result);
};

adjacentElementsProduct(inputArray);

// 2. Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

const calculateSum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

function alternatingSums(inputArray) {
  let team1 = [];
  for (let i = 0; i < inputArray.length; i += 2) {
    team1.push(inputArray[i]);
  }
  let team2 = inputArray.filter((element) => !team1.includes(element));

  let output = [calculateSum(team1), calculateSum(team2)];
  console.log("Alternating sums are: " + output);
}

alternatingSums([60, 40, 55, 75, 64]);
