import type { TApiResponse } from "./type"

export type TLoginCredential = {
    email: string,
    password: string
}

export type TLoginResult = TApiResponse<{
    id: number,
    name: string,
    email: string,
    role: string
}>

export type TRegisterResult = TApiResponse<{
    id: number,
    name: string,
    email: string,
    role: string
}>

export type TRegisterUser = {
    name: string,
    email: string,
    password: string,
    role_id: number
}

export type TAuthUser = TApiResponse<{
    id: number,
    name: string,
    email: string,
    role: string
}>