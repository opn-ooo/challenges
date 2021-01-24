import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import mapValues from 'lodash/fp/mapValues'
import compose from 'lodash/fp/compose'
import map from 'lodash/fp/map'
import groupBy from 'lodash/fp/groupBy'

import paymentAPI from '~api/payment'
import { MODULE_NAME } from '~constants/redux'
import { summaryDonations } from '~helpers/donation'
import { wait } from '~helpers/axios'

export const fetchPayment = createAsyncThunk(
    `${MODULE_NAME.donation}/fetchPayment`,
    async () => {
        const response = await paymentAPI.getAll()
        const allCurrencyAmount = compose(
            mapValues(values => compose(
                summaryDonations,
                map('amount')
            )(values)),
            groupBy('currency')
        )(response)

        return allCurrencyAmount
    }
)

export const submitPayment = createAsyncThunk(
    `${MODULE_NAME.donation}/submitPayment`,
    async ({ id: charitiesId, amount, currency }) => {

        try {
            const response = await paymentAPI.submit({
                charitiesId,
                amount,
                currency,
            })
            await wait(1500)

            return response.amount
        } catch (error) {
            return Promise.reject('Submit payment failed')
        }
    }
)

export const setMessage = createAction(`${MODULE_NAME.donation}/setMessage`)

export default {
    setMessage,

    fetchPayment,
    submitPayment,
}
