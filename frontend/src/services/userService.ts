import type { TLoginCredential, TRegisterUser } from "../types/user.type";
import axiosInstance from "../utils/axiosInstance";

export const loginService = async (credential: TLoginCredential) => await axiosInstance.post('/login', credential)

export const registerService = async (data: TRegisterUser) => await axiosInstance.post('/register', data)