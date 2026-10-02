import { useQuery } from '@tanstack/react-query';
import { getAll as getAllRole } from '../services/roleService';
import type { TRoleResult } from '../types/role.type';

export const useGetAllRole = () => {
    return useQuery<TRoleResult[]>({
        queryKey: ['roles'],
        queryFn: getAllRole,
    });
};
