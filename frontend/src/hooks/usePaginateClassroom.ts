import { paginateClassroomService } from "@/services/classroomService"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const usePaginateClassroom = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const page = Number(searchParams.get('page') || '1')
    const [lastPage, setLastPage] = useState<number>(0)

    const query = useQuery({
        queryKey: ["classrooms", page],
        queryFn: async () => {
            try {
                const res = await paginateClassroomService(page)
                const { lastPage: resLastPage } = res.data.metadata
                setLastPage(resLastPage)

                return res
            } catch (error) {
                Promise.reject(error)
            }
        }
    })

    const nextPage = () => {
        if (page < lastPage) {
            setSearchParams({ page: String(page + 1) })
        }
    }

    const prevPage = () => {
        if (page > 1) {
            setSearchParams({ page: String(page - 1) })
        }
    }

    const toPage = (to: number) => setSearchParams({ page: String(to) })

    return {
        query,
        nextPage,
        prevPage,
        toPage
    }
}

export default usePaginateClassroom