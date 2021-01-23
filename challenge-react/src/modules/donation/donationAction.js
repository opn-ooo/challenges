import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

import paymentAPI from '~api/payment'
import { MODULE_NAME } from '~constants/redux'
import { summaryDonations } from '~helpers/donation'

export const fetchPayment = createAsyncThunk(
    `${MODULE_NAME.donation}/fetchPayment`,
    async () => {
        const payment = await paymentAPI.getAll()
        const totalAmount = summaryDonations(payment.map((item) => item.amount))
        return totalAmount
    }
)

export const submitPayment = createAsyncThunk(
    `${MODULE_NAME.charity}/submitPayment`,
    async ({ id: charitiesId, amount, currency }) => {
        const response = await paymentAPI.submit({
            charitiesId,
            amount,
            currency,
        })

        return response.amount
    }
)

export const setMessage = createAction(`${MODULE_NAME.donation}/fetchPayment`)

export default {
    setMessage,

    fetchPayment,
    submitPayment,
}
