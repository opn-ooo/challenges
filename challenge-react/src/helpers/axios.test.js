import faker from 'faker'
import * as axiosHelpers from './axios'

describe('extractBody', () => {
    it('should return res.data', () => {
        const response  = {
            data: [{
                id: faker.random.uuid(),
            }],
        }
        expect(
            axiosHelpers.extractBody(response)
        ).toEqual(response.data)
    })
})