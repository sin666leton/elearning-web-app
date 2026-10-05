import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/lib/shadcn/components/ui/pagination";

interface IPaginator {
    maxPages: number,
    pages: number[],
    currentPage: number,
    handlePrevious: () => void,
    handleNext: () => void,
    handleSelect: (to: number) => void
}

export default function Paginator({ pages, maxPages, currentPage, handlePrevious, handleNext, handleSelect }: IPaginator) {
    return <Pagination>
        <PaginationContent>
            <PaginationItem>
                <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        handlePrevious();
                    }}
                />
            </PaginationItem>
            {pages.map(pageNum => (
                <PaginationItem key={pageNum}>
                    <PaginationLink
                        href="#"
                        isActive={currentPage === pageNum}
                        onClick={(e) => {
                            e.preventDefault()

                            handleSelect(pageNum)
                        }}
                    >
                        {pageNum}
                    </PaginationLink>
                </PaginationItem>
            ))}
            {pages.length > maxPages && (
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
            )}
            <PaginationItem>
                <PaginationNext
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNext();
                    }}
                />
            </PaginationItem>
        </PaginationContent>
    </Pagination>
}