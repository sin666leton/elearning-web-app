import type { TApiResponse } from "./type"

export type TLoginCredential = {
    email: string,
    password: string
}

export type TLoginResult = TApiResponse<{
    user: {
        id: number,
        name: string,
        email: string,
        role: string
    },
    token: string
}>

export type TRegisterUser = {
    name: string,
    email: string,
    password: string,
    role_id: number
}