import * as reactRedux from 'react-redux'
import { useDonationHook } from '../donationHook'
import * as fetchThunk from '@/modules/donationModule/donationAction'

import createStore from '@/store'


const state = createStore().getState()

beforeEach(() => {
    reactRedux.useSelector.mockImplementation(cb => cb(state))
})


describe('useDonationHook', () => {
    describe('amount', () => {
        it('should be default value is zero', () => {
            const { amount } = useDonationHook()
            expect(amount).toEqual(0)
        })
    })

    describe('fetchAmount', () => {
        test('useDispatch should have been called once', () => {
            const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch')

            const { fetchAmount } = useDonationHook()
            fetchAmount()

            expect(useDispatchSpy).toHaveBeenCalledTimes(1)
        })


        test('donation.fetchAmount should have been called once', () => {
            const spyFetchDonations = jest.spyOn(fetchThunk, 'fetchDonationList')

            const { fetchAmount } = useDonationHook()
            fetchAmount()

            expect(spyFetchDonations).toHaveBeenCalledTimes(1)
        })

        test('donation.fetchAmount should have been called once', () => {
            const spyUpdateDonations = jest.spyOn(fetchThunk, 'donationToCharities')

            const { donate } = useDonationHook()
            donate()

            expect(spyUpdateDonations).toHaveBeenCalledTimes(1)
        })
    })
})
