const getBiasedEvent = require("./find_probability_biased.js");

describe("getBiasedEvent", () => {
  // Test case 1
  it("returns the correct outcome for Flipping of a coin", () => {
    const outcomes = [{ Head: 65 }, { Tail: 35 }];
    const result = getBiasedEvent(outcomes);
    expect(["Head", "Tail"]).toContain(result);
  });

  // Test case 2
  it("returns the correct outcome for Rolling of a six-faced biased dice", () => {
    const outcomes = [
      { 1: 10 },
      { 2: 30 },
      { 3: 15 },
      { 4: 15 },
      { 5: 30 },
      { 6: 0 },
    ];
    const result = getBiasedEvent(outcomes);
    expect(["1", "2", "3", "4", "5", "6"]).toContain(result);
  });
});
