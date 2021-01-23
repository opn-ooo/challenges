import { createAsyncThunk } from '@reduxjs/toolkit'

import charityAPI from '~api/charity'
import { MODULE_NAME } from '~constants/redux'


export const fetchCharities = createAsyncThunk(
    `${MODULE_NAME.charity}/fetchAll`,
    async () => {
        const data = charityAPI.getAll()
        return data
    }
)

export default {
    fetchCharities,
}
