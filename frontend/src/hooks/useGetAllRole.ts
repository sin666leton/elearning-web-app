import { useQuery } from '@tanstack/react-query';
import { getAll as getAllRole } from '../services/roleService';
import type { TRoleResult } from '../types/role.type';
import type { TApiResponse } from '@/types/type';

export const useGetAllRole = () => {
    return useQuery<TApiResponse<TRoleResult[]>>({
        queryKey: ['roles'],
        queryFn: getAllRole,
    });
};
