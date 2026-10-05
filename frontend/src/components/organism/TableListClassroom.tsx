import usePaginateClassroom from "@/hooks/usePaginateClassroom";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/lib/shadcn/components/ui/table";
import { Edit2Icon, Trash2Icon } from "lucide-react";
import Paginator from "../molecules/Paginator";
import { Skeleton } from "@/lib/shadcn/components/ui/skeleton";

export default function TableListClassroom() {
    const { query, nextPage, prevPage, toPage } = usePaginateClassroom()
    const { data: classroomsResponse, isLoading, isError } = query

    return <Table>
        <TableHeader className="bg-gray-50/75">
            <TableRow className="hover:bg-transparent">
                <TableHead className="font-semibold text-gray-700 pl-6">Nama Kelas</TableHead>
                <TableHead className="font-semibold text-gray-700 w-[120px]">Peserta</TableHead>
                <TableHead className="font-semibold text-gray-700 hidden md:table-cell">Dibuat pada</TableHead>
                <TableHead className="font-semibold text-gray-700 text-right pr-6">Aksi</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {!isLoading && classroomsResponse && classroomsResponse.data.data.map((classroom, index) => (
                <TableRow key={index} className="group transition-colors hover:bg-gray-50/50">
                    <TableCell className="font-medium text-gray-900 pl-6">
                        {classroom.name}

                        <div className="text-xs text-gray-500 font-normal mt-0.5 md:hidden">{classroom.createdAt}</div>
                    </TableCell>
                    <TableCell>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10">
                            {classroom.participants}
                        </span>
                    </TableCell>
                    <TableCell className="text-gray-500 hidden md:table-cell">{classroom.createdAt}</TableCell>
                    <TableCell className="text-right pr-6">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Edit">
                                <Edit2Icon className="h-4 w-4" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Hapus">
                                <Trash2Icon className="h-4 w-4" />
                            </button>
                        </div>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
        <TableFooter>
            <TableRow>
                <TableCell colSpan={5}>
                    {isLoading && <Skeleton className="h-6 w-1/4 mx-auto" />}
                    {!isLoading && classroomsResponse && <Paginator
                        currentPage={classroomsResponse.data.metadata.currentPage}
                        pages={classroomsResponse.data.metadata.pages}
                        maxPages={classroomsResponse.data.metadata.lastPage}
                        handleNext={nextPage}
                        handlePrevious={prevPage}
                        handleSelect={toPage}
                    />}
                </TableCell>
            </TableRow>
        </TableFooter>
    </Table>
}