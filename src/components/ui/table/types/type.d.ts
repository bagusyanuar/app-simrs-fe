export type TColumn<T> = {
    key?: string
    cell?: (row: T, index: number) => React.ReactNode
    text?: string
    align?: 'justify-start' | 'justify-center' | 'justify-end'
    width?: string
    columnClassName?: string
    cellClassName?: string | ((row: T, index: number) => string)
    sortable?: boolean
}

export type TAction<T> = {
    onEdit?: (row: T, index: number) => void
    onDelete?: (row: T, index: number) => void
}