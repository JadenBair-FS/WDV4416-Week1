const isValidCreditCard = (creditCardNumber) => {
  if (creditCardNumber.length >= 12 && creditCardNumber.length <= 16) {
    return true;
  } else {
    return "Invalid Credit Card";
  }
};

const obscureCreditCard = (creditCardNumber) => {
  const lastFourDigits = creditCardNumber.slice(-4);
  const obscuredCreditCard =
    "*".repeat(creditCardNumber.length - 4) + lastFourDigits;
  return obscuredCreditCard;
};

module.exports = {
  isValidCreditCard,
  obscureCreditCard,
};
