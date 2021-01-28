import { createAsyncThunk } from '@reduxjs/toolkit'

import charityAPI from '~api/charity'
import { MODULE_NAME } from '~constants/redux'
import { wait } from '~helpers/axios'


export const fetchCharities = createAsyncThunk(
    `${MODULE_NAME.charity}/fetchAll`,
    async () => {
        const data = await charityAPI.getAll()
        await wait(2000)
        return data
    }
)

export default {
    fetchCharities,
}
