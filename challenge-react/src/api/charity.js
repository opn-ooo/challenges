import axiosInstance from './axiosInstance'
import { extractBody } from '~helpers/axios'

const URL = '/charities'

export default {
    getAll() {
        return axiosInstance.get(URL)
            .then(extractBody)
    },
}
