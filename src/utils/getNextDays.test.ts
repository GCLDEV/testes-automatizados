import { getNextDays } from "./getNextDays";

test("should be return the next 5 days", () => {
  const days = getNextDays();

  expect(days.length).toBe(5);
});