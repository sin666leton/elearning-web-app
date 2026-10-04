import axiosInstance from "@/utils/axiosInstance";

export const getCSRFToken = async () => await axiosInstance.get('/sanctum/csrf-cookie', {
    baseURL: 'http://localhost:8000'
})