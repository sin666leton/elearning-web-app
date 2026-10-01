import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '../store/authStore';
import type { TRegisterResult, TRegisterUser } from '../types/user.type';
import { registerService } from "../services/userService";
import { AxiosError } from "axios";
import type { TMessageError, TValidationError } from "../types/errors.type";
import { useState } from "react";

export const registerSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Nama tidak boleh kosong" }),
    role_id: z
        .string()
        .min(1, { message: "Peran (Role) tidak boleh kosong" }),
    email: z
        .string()
        .min(1, { message: "Email tidak boleh kosong" })
        .email({ message: "Format email tidak valid" }),
    password: z
        .string()
        .min(6, { message: "Password minimal 6 karakter" }),
    repeatPassword: z
        .string()
        .min(1, { message: "Ulangi password tidak boleh kosong" })
}).refine((data) => data.password === data.repeatPassword, {
    message: "Password tidak sama",
    path: ["repeatPassword"]
});

export type TRegisterForm = z.infer<typeof registerSchema>

const useRegister = () => {
    const [unexpectedError, setUnexpectedError] = useState<string | undefined>(undefined)
    const loginToStore = useAuthStore((state) => state.login)

    const form = useForm<TRegisterForm>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            role_id: "",
            email: "",
            password: "",
            repeatPassword: ""
        }
    })

    const register = useMutation({
        mutationFn: async (data: TRegisterUser) => {
            try {
                const response = await registerService(data)

                return response.data
            } catch (error: any) {
                throw error
            }
        },
        onSuccess: (result: TRegisterResult) => {
            loginToStore(result.data.user, result.data.token)
        },
        onError: (error: any) => {
            if (error instanceof AxiosError) {
                switch (error.status) {
                    case 422:
                        const err: TValidationError = error.response?.data
                        const nameError: string = err.error.name
                        const roleError: string = err.error.role_id || err.error.role
                        const emailError: string = err.error.email
                        const passwordError: string = err.error.password

                        if (nameError) form.setError("name", { message: nameError })
                        if (roleError) form.setError("role_id", { message: roleError })
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
            form.setValue("repeatPassword", "")
        },
    })

    const handleRegister = form.handleSubmit((data) => {
        const payload: TRegisterUser = {
            name: data.name,
            email: data.email,
            password: data.password,
            role_id: Number(data.role_id)
        }
        register.mutate(payload)
    })

    return {
        form,
        handleRegister,
        isLoading: register.isPending,
        unexpectedError: unexpectedError
    }
}

export default useRegister;