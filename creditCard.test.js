const { isValidCreditCard, obscureCreditCard } = require("./creditCard");

describe("Credit Card Module Test", () => {
  //Test 1 - Test if the credit card number is valid
  test("As a user, I want to check if the credit card number is valid", () => {
    expect(isValidCreditCard("123456789012")).toBe(true);
    expect(isValidCreditCard("1234567890123")).toBe(true);
    expect(isValidCreditCard("12345678901234")).toBe(true);
    expect(isValidCreditCard("123456789012345")).toBe(true);
    expect(isValidCreditCard("1234567890123456")).toBe(true);
    expect(isValidCreditCard("")).toBe("Invalid Credit Card");
    expect(isValidCreditCard("1")).toBe("Invalid Credit Card");
    expect(isValidCreditCard("12")).toBe("Invalid Credit Card");
    expect(isValidCreditCard("123")).toBe("Invalid Credit Card");
    expect(isValidCreditCard("1234")).toBe("Invalid Credit Card");
    expect(isValidCreditCard("12345")).toBe("Invalid Credit Card");
    expect(isValidCreditCard("123456")).toBe("Invalid Credit Card");
    expect(isValidCreditCard("1234567")).toBe("Invalid Credit Card");
    expect(isValidCreditCard("12345678")).toBe("Invalid Credit Card");
    expect(isValidCreditCard("123456789")).toBe("Invalid Credit Card");
    expect(isValidCreditCard("1234567890")).toBe("Invalid Credit Card");
    expect(isValidCreditCard("12345678901")).toBe("Invalid Credit Card");
    expect(isValidCreditCard("12345678901234567")).toBe("Invalid Credit Card");
  });

  //Test 2 - Test if the return credit card is obscured

  test("As a user, I want to check if the credit card number is obscured", () => {
    expect(obscureCreditCard("123456789012")).toBe("********9012");
    expect(obscureCreditCard("1234567890123")).toBe("*********0123");
    expect(obscureCreditCard("12345678901234")).toBe("**********1234");
    expect(obscureCreditCard("123456789012345")).toBe("***********2345");
    expect(obscureCreditCard("1234567890123456")).toBe("************3456");
  });
});
