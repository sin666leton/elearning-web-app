import axios from 'axios'
import { useAuthStore } from '../store/authStore'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().token
        if (token) config.headers.Authorization = `Bearer ${token}`

        config.headers['Content-Type'] = "application/json"
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance
