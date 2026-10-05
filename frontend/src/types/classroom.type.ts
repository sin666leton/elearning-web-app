import type { TApiResponse } from "./type";

export type TClassroomPagination = TApiResponse<{
    data: {
        id: number,
        name: string,
        participants: number,
        createdAt: string
    }[],
    metadata: {
        lastPage: number,
        pages: number[],
        currentPage: number
    }
}>