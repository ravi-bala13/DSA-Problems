const getBiasedEvent = require("./find_probability_biased.js");

describe("getBiasedEvent", () => {
  it("returns the correct outcome with biased probabilities", () => {
    const outcomes = [{ Head: 65 }, { Tail: 35 }];
    const result = getBiasedEvent(outcomes);
    expect(["Head", "Tail"]).toContain(result);
  });

  it("returns the correct outcome with multiple outcomes and probabilities", () => {
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
