import { summaryDonations } from '..';

describe('helpers', function () {
  test('`summaryDonations` should calculate donations correctly', function () {
    expect(summaryDonations([1, 2, 3, 4])).toEqual(10);
  });
  test('`summaryDonations` should be return 10 when some value is null', () => {
    expect(summaryDonations([1, 2, 3, 4, null])).toEqual(10);
  })
});
