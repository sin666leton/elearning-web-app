import useCheckUser from "@/hooks/useCheckUser";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface IProtectedRoute {
    allow: string | undefined
}

export default function ProtectedRoute({ allow }: IProtectedRoute) {
    const user = useAuthStore(state => state.user)
    const login = useAuthStore(state => state.login)
    const logout = useAuthStore(state => state.logout)

    const { data, isLoading, isSuccess, isFetched, isError } = useCheckUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (isSuccess && isFetched && data) {
            login(data.data)
        }

        if (isError) {
            logout()
            if (allow !== undefined) {
                navigate('/login', { replace: true })
            }
        }
    }, [isSuccess, isFetched, isError, data, allow, login, logout, navigate])

    useEffect(() => {
        if (user) {

            if (allow === undefined) {
                navigate(`/${user.role}/dashboard`, { replace: true })
            } else if (user.role !== allow) {
                navigate(`/${user.role}/dashboard`, { replace: true })
            }
        }
    }, [allow, user, navigate]);

    if (isLoading && !user) {
        return (
            <div className="h-screen w-full flex items-center justify-center">
                <span className="text-gray-500 font-medium">Memuat data...</span>
            </div>
        )
    }

    return <Outlet />
}
