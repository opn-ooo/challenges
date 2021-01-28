import axiosInstance from './axiosInstance'
import { extractBody } from '~helpers/axios'

const URL = '/payments'

export default {
    getAll() {
        return axiosInstance.get(URL)
            .then(extractBody)
    },
    submit(data) {
        return axiosInstance.post(URL, data)
            .then(extractBody)
    },
}
