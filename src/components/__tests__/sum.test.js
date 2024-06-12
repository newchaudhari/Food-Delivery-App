import { sum } from "../sum";

test("Sum function should calculate Sum of two numbers", () => {
  const result = sum(4, 5);

  expect(result).toBe(9);
});
