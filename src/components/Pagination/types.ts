export type PaginationProps = {
    totalPages: number;
    pageNumber: number;
    handlePageClick(page: { selected?: number }): void;
};