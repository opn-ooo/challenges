import {
  summaryDonations,
  removeCommaNumber,
  addCommaNumber,
} from "../helpers";

describe("helpers", function () {
  test("`summaryDonations` should calculate donations correctly", function () {
    expect(summaryDonations([1, 2, 3, 4])).toEqual(10);
  });

  test("`removeCommaNumber` 1,234 should not have comma", function () {
    expect(removeCommaNumber("1,234")).toEqual("1234");
  });

  test("`addCommaNumber` 1234 should have comma", function () {
    expect(addCommaNumber(1234)).toEqual("1,234");
  });
});
