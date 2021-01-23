import  * as reactRedux from 'react-redux'

import useCharity from './useCharity'
import charityAction from '~modules/charity/charityAction'
import createStore from '~root/createStore'

const state = createStore().getState()

beforeEach(() => {
    reactRedux.useSelector.mockImplementation(cb => cb(state))
})

describe('useCharity', () => {
    describe('charities', () => {
        it('should be empty arrays', () => {
            const { charities } = useCharity()
            expect(charities).toEqual([])
        })
    })

    describe('fetchCharities', () => {
        test('useDispatch should have been called once', () => {
            const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch')
            
            const { fetchCharities } = useCharity()
            fetchCharities()

            expect(useDispatchSpy).toHaveBeenCalledTimes(1) 
        })

        test('charityAction.fetchCharities should have been called once', () => {
            const spyFetchCharities = jest.spyOn(charityAction, 'fetchCharities')

            const { fetchCharities } = useCharity()
            fetchCharities()

            expect(spyFetchCharities).toHaveBeenCalledTimes(1)
        })
    })
})
