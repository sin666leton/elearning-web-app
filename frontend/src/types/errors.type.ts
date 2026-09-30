export type TError<T> = {
    error: T,
    code: string
}

export type TValidationError = TError<Record<string, string>>

export type TMessageError = TError<{
    message: string
}>