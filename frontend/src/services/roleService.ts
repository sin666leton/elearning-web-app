import type { TApiResponse } from "@/types/type";
import type { TRoleResult } from "../types/role.type";
import axiosInstance from "../utils/axiosInstance";

export const getAll = async (): Promise<TApiResponse<TRoleResult[]>> => await axiosInstance.get('/roles')