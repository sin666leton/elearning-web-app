import type { TClassroomPagination } from "@/types/classroom.type";
import type { TApiResponse } from "@/types/type";
import axiosInstance from "@/utils/axiosInstance";

export const paginateClassroomService = async (currentPage: number | undefined = undefined): Promise<TClassroomPagination> => await axiosInstance.get('/classrooms', {
    params: {
        page: currentPage
    }
})