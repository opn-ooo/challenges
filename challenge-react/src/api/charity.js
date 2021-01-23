import axiosInstance from './axiosInstance'
import { extractBody } from '~helpers/axios'

export default {
    getAll() {
        return axiosInstance.get('/charities')
            .then(extractBody)
    },
}
