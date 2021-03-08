import * as reactRedux from 'react-redux'

import { useCharitesHook } from '../charitiesHook'
import * as fetchThunk from '@/modules/charitiesModule/charitiesAction'
import createStore from '@/store'

const state = createStore().getState()

beforeEach(() => {
    reactRedux.useSelector.mockImplementation(cb => cb(state))
})

describe('useCharitesHook', () => {
    describe('charitiesList', () => {
        it('should be empty arrays', () => {
            const { charitiesList } = useCharitesHook()
            expect(charitiesList).toEqual([])
        })
    })

    describe('fetchCharities', () => {
        test('useDispatch should have been called once', () => {
            const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch')

            const { fetchCharities } = useCharitesHook()
            fetchCharities()

            expect(useDispatchSpy).toHaveBeenCalledTimes(1)
        })

        test('charityAction.fetchCharities should have been called once', () => {
            const spyFetchCharities = jest.spyOn(fetchThunk, 'fetchCharitiesList')

            const { fetchCharities } = useCharitesHook()
            fetchCharities()

            expect(spyFetchCharities).toHaveBeenCalledTimes(1)
        })
    })
})
