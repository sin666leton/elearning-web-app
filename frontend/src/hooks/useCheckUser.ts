import { checkUserService } from "@/services/userService"
import { useAuthStore } from "@/store/authStore"
import type { TAuthUser } from "@/types/user.type"
import { useQuery } from "@tanstack/react-query"

const useCheckUser = () => {
    const user = useAuthStore(state => state.user)

    return useQuery<TAuthUser>({
        queryKey: ['user'],
        queryFn: checkUserService,
        enabled: !user,
        retry: false,
        staleTime: 5 * 60 * 1000
    })
}

export default useCheckUser