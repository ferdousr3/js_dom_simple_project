function getInputValue(iputId) {
  const inputField = document.getElementById(iputId);
  const inputValuText = inputField.value;
  const inputValue = parseFloat(inputValuText);
  // clear input field
  inputField.value = "";
  return inputValue;
}

function updateTotalField(totalFieldId, inputValue) {
  const previousAmount = document.getElementById(totalFieldId);
  const previousAmountText = previousAmount.innerText;
  const previousAmountValue = parseFloat(previousAmountText);
  const tatalAmount = previousAmountValue + inputValue;
  previousAmount.innerText = tatalAmount;
}

function getCurrentBalance() {
  const totalBalance = document.getElementById("balance-amount");
  const previousBalanceText = totalBalance.innerText;
  const previousBalanceAmount = parseFloat(previousBalanceText);
  return previousBalanceAmount;
}
function updatedBalance(amount, isAdd) {
  const totalBalance = document.getElementById("balance-amount");
  // const previousBalanceText = totalBalance.innerText;
  // const previousBalanceAmount = parseFloat(previousBalanceText);
  const previousBalanceAmount = getCurrentBalance();
  if (isAdd == true) {
    const updatedBalance = previousBalanceAmount + amount;
    totalBalance.innerText = updatedBalance;
  } else {
    const updatedBalance = previousBalanceAmount - amount;
    totalBalance.innerText = updatedBalance;
  }
}

document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDepositValue = getInputValue("deposit-input");
  if (newDepositValue > 0) {
    updateTotalField("deposit-amount", newDepositValue);
    updatedBalance(newDepositValue, true);
  }
});

// widthdraw section
document.getElementById("widthdraw-btn").addEventListener("click", function () {
  const newWithdrawValue = getInputValue("withdraw-input");
  const currentBalance= getCurrentBalance();
  if (newWithdrawValue > 0  && newWithdrawValue <= currentBalance  ) {
    updateTotalField("withdraw-amount", newWithdrawValue);
    updatedBalance(newWithdrawValue, false);
  }
});
