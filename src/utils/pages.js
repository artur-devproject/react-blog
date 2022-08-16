export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
    return new Array(totalPages)
        .fill(null)
        .map((value, index) => value = index + 1)
}