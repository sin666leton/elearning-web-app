import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query'
import { useAuthStore } from '../store/authStore'
import { useNavigate } from 'react-router-dom'
import type { TLoginCredential, TLoginResult } from '../types/user.type'
import { loginService } from "../services/userService";
import { AxiosError } from "axios";
import type { TMessageError, TValidationError } from "../types/errors.type";
import { useState } from "react";

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email tidak boleh kosong" })
        .email({ message: "Format email tidak valid" }),
    password: z
        .string()
        .min(1, { message: "Password tidak boleh kosong" })
});

export type TLoginForm = z.infer<typeof loginSchema>

const useLogin = () => {
    const [unexpectedError, setUnexpectedError] = useState<string | undefined>(undefined)
    const loginToStore = useAuthStore((state) => state.login)
    // const navigate = useNavigate()

    const form = useForm<TLoginForm>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const login = useMutation({
        mutationFn: async (data: TLoginCredential) => {
            try {
                const response = await loginService(data)

                return response.data
            } catch (error: any) {
                throw error
            }
        },
        onSuccess: (result: TLoginResult) => {
            loginToStore(result.data.user, result.data.token)
            // alert(`Login berhasil! Halo, ${data.user.name}`)
        },
        onError: (error: any) => {
            if (error instanceof AxiosError) {
                switch (error.status) {
                    case 422:
                        const err: TValidationError = error.response?.data
                        const emailError: string = err.error.email
                        const passwordError: string = err.error.password

                        if (emailError) form.setError("email", { message: emailError })
                        if (passwordError) form.setError("password", { message: passwordError })

                        break
                    case 401:
                        const unauth: TMessageError = error.response?.data

                        setUnexpectedError(unauth.error.message)
                        break
                    default:
                        setUnexpectedError("Terjadi kesalahan pada server")
                }
            }

            form.setValue("password", "")
        },
    })

    const handleLogin = form.handleSubmit((data) => {
        login.mutate(data)
    })

    return {
        form,
        handleLogin,
        isLoading: login.isPending,
        unexpectedError: unexpectedError
    }
}

export default useLogin