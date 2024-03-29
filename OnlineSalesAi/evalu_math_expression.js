const { default: axios } = require("axios");

const API_ENDPOINT = "http://api.mathjs.org/v4/";

/**
 *
 * @param {array of string} expressions
 * @returns Promise
 */
async function evaluateExpressions(expressions) {
  try {
    const response = await axios.post(API_ENDPOINT, {
      expr: expressions,
    });

    let { result } = response.data;
    return result;
  } catch (error) {
    console.log("Error in evaluateExpressions:", error);
    return null;
  }
}

const expressions = [
  "2 * 4 * 4",
  "5 / (7 - 5)",
  "sqrt(5^2 - 4^2)",
  "sqrt(-3^2 - 4^2)",
];

// Evaluate the array of expressions
evaluateExpressions(expressions).then((results) => {
  let i = 0;
  expressions.forEach((each) => {
    console.log(`${each} => ${results[i++]}`);
  });
});
module.exports = evaluateExpressions;
