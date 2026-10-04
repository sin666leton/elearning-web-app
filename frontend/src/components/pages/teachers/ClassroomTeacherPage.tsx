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

                <Table>
                    <TableHeader className="bg-gray-50/75">
                        <TableRow className="hover:bg-transparent">
                            <TableHead className="font-semibold text-gray-700 pl-6">Nama Kelas</TableHead>
                            <TableHead className="font-semibold text-gray-700 w-[120px]">Peserta</TableHead>
                            <TableHead className="font-semibold text-gray-700 hidden md:table-cell">Dibuat pada</TableHead>
                            <TableHead className="font-semibold text-gray-700 text-right pr-6">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="group transition-colors hover:bg-gray-50/50">
                            <TableCell className="font-medium text-gray-900 pl-6">
                                Web Programming
                                <div className="text-xs text-gray-500 font-normal mt-0.5 md:hidden">10 September 2026</div>
                            </TableCell>
                            <TableCell>
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                    20 Siswa
                                </span>
                            </TableCell>
                            <TableCell className="text-gray-500 hidden md:table-cell">10 September 2026</TableCell>
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

                        {/* Baris 2 */}
                        <TableRow className="group transition-colors hover:bg-gray-50/50">
                            <TableCell className="font-medium text-gray-900 pl-6">
                                UI/UX Design Fundamentals
                                <div className="text-xs text-gray-500 font-normal mt-0.5 md:hidden">15 September 2026</div>
                            </TableCell>
                            <TableCell>
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                    35 Siswa
                                </span>
                            </TableCell>
                            <TableCell className="text-gray-500 hidden md:table-cell">15 September 2026</TableCell>
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
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}