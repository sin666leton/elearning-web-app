import type { TRoleResult } from "../types/role.type";
import axiosInstance from "../utils/axiosInstance";

export const getAll = async (): Promise<TRoleResult[]> => await axiosInstance.get('/roles')