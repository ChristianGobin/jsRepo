function tipCalc(totalBill) {
  if (totalBill >= 50 && totalBill <= 300) {
    var tipValue = totalBill * 0.15;
  } else {
    var tipValue = totalBill * 0.2;
  }
  return "Your bill without tip was " + totalBill + " tip: " + tipValue;
}

console.log(tipCalc(44));
