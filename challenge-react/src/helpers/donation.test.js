import { summaryDonations } from './donation'

describe('summaryDonations', function () {
    it('should calculate donations correctly', function () {
        expect(summaryDonations([1, 2, 3, 4])).toEqual(10)
    })
})
