import { logoutService } from "@/services/userService"
import { useAuthStore } from "@/store/authStore"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

const useLogout = () => {
    const logoutStore = useAuthStore(state => state.logout)
    const queryClient = useQueryClient()
    const navigation = useNavigate()

    const logout = useMutation({
        mutationFn: async () => {
            try {
                await logoutService()
            } catch (error) {
                throw error
            }
        },
        onSuccess: () => {
            logoutStore()
            queryClient.clear()
            return navigation('/login')
        },
        onError: (error: any) => {

        }
    })

    const handleLogout = () => logout.mutate()

    return {
        isLoading: logout.isPaused,
        handleLogout
    }
}

export default useLogout