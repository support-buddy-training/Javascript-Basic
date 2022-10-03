// const sum = require("./main");

// Imprort ES6:
import { sum, multiply } from "./main";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
