import type { NavigateFunction } from "react-router-dom"
import type { TLoginResult, TRegisterResult } from "../types/user.type"

const navigateToRoleDashboard = (navigate: NavigateFunction, data: TLoginResult | TRegisterResult) => {
    const path: string = data.data.user.role

    return navigate(`/${path}/dashboard`)
}

export default navigateToRoleDashboard