import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    withCredentials: true,
    withXSRFToken: true,
})

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = "application/json"
        config.headers['Accept'] = "application/json"

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
)

export default axiosInstance
