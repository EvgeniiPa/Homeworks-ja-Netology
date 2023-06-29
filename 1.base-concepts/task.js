"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * (a * c);
  let root1;
  let root2;
  if (discriminant < 0) {
    return arr;
  } else if (discriminant == 0) {
    root1 = -b / (2 * a);
    arr.push(root1);
  } else if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let interestRate = percent / 100 / 12;

  let bodyCredit = amount - contribution;

  let payMonth = interestRate / ((1 + interestRate) ** countMonths - 1);

  payMonth = interestRate + payMonth;

  payMonth = bodyCredit * payMonth;

  let totalSum = payMonth * countMonths;

  totalSum = totalSum.toFixed(2);

  totalSum = Number(totalSum);

  return;
}
