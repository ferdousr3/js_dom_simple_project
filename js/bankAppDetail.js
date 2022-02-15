document.getElementById("deposit-btn").addEventListener("click", function () {
  // const depositField = document.getElementById("deposit-input");
  // const newDepositValueText = depositField.value;
  // const newDepositValue = parseFloat(newDepositValueText);
  const newDepositValue = getInputValue("deposit-input");
  // const depositAmount = document.getElementById("deposit-amount");
  // const previousDepositAmountText = depositAmount.innerText;
  // const previousDepositAmount = parseFloat(previousDepositAmountText);
  // const depositTotal = previousDepositAmount + newDepositValue;
  // depositAmount.innerText = depositTotal;
  updateTotalField("deposit-amount", newDepositValue);
  // update balance
  /* const totalBalance = document.getElementById("balance-amount");
  const previousBalanceText = totalBalance.innerText;
  const previousBalanceAmount = parseFloat(previousBalanceText);
  const updatedBalance = previousBalanceAmount + newDepositValue;
  totalBalance.innerText = updatedBalance; */
  updatedBalance("balance-amount", newDepositValue, true);
});

// widthdraw section
document.getElementById("widthdraw-btn").addEventListener("click", function () {
  // const widthdrawField = document.getElementById("withdraw-input");
  // const newWithdrawValueText = widthdrawField.value;
  // const newWithdrawValue = parseFloat(newWithdrawValueText);
  const newWithdrawValue = getInputValue("withdraw-input");
  /* const widthdrawAmount = document.getElementById("withdraw-amount");
  const previousWdthdrawAmountText = widthdrawAmount.innerText;
  const previousWidthdrawAmountValue = parseFloat(previousWdthdrawAmountText);
  const totalWidthdraw = previousWidthdrawAmountValue + newWithdrawValue;
  widthdrawAmount.innerText = totalWidthdraw; */
  updateTotalField("withdraw-amount", newWithdrawValue);

  // update balance
  // const totalBalance = document.getElementById("balance-amount");
  // const previousBalanceText = totalBalance.innerText;
  // const previousBalanceAmount = parseFloat(previousBalanceText);
  // const updatedBalance = previousBalanceAmount - newWithdrawValue;
  // totalBalance.innerText = updatedBalance;
  updatedBalance("balance-amount", newWithdrawValue, false);
});
