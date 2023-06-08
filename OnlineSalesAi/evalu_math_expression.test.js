const evaluateExpressions = require("./evalu_math_expression.js");

describe("evaluateExpressions", () => {
  // Test case 1
  it("Is evaluates expressions correctly", async () => {
    const expressions = [
      "2 * 4 * 4",
      "5 / (7 - 5)",
      "sqrt(5^2 - 4^2)",
      "sqrt(-3^2 - 4^2)",
    ];

    const results = await evaluateExpressions(expressions);

    expect(results).toEqual(["32", "2.5", "3", "5i"]);
  });

  // Test case 2
  it("Is it handles API errors in a correct way", async () => {
    const expressions = ["1 +"];

    const results = await evaluateExpressions(expressions);

    expect(results).toBeNull();
  });
});
