import TableListClassroom from "@/components/organism/TableListClassroom";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/lib/shadcn/components/ui/table";
import { Edit2Icon, Trash2Icon, PlusIcon, SearchIcon } from "lucide-react";

export default function ClassroomTeacherPage() {
    return (
        <div className="w-full max-w-6xl mx-auto space-y-6">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Daftar Kelas</h1>
                    <p className="text-sm text-gray-500 mt-1">Kelola kelas, peserta, dan materi Anda di sini.</p>
                </div>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Tambah Kelas
                </button>
            </div>

            {/* Table Container */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                {/* Optional Toolbar/Search */}
                <div className="p-4 border-b border-gray-100 flex items-center gap-2">
                    <div className="relative w-full max-w-sm">
                        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Cari kelas..."
                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-9"
                        />
                    </div>
                </div>

                <TableListClassroom />
            </div>
        </div>
    )
}