import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import type { TColumn, TAction } from './types/type'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableAction from './TableAction'

interface IProps<T> {
    columns: TColumn<T>[]
    data: T[]
    className?: string
    containerClassName?: string
    tableClassName?: string
    headerClassName?: string
    rowClassName?: string
    onSort?: (key?: string) => void
    isProcessing?: boolean
    pageSizeOptions?: number[]
    onPageSizeChange?: (size: number) => void
    action?: TAction<T>
}

const Table = <T,>({
    columns,
    data,
    onSort,
    action,
    onPageSizeChange,
    className = '',
    containerClassName = '',
    tableClassName = '',
    headerClassName = '',
    rowClassName = '',
    isProcessing = false,
    pageSizeOptions = [10, 25, 50],
}: IProps<T>) => {

    const mergedColumns: TColumn<T>[] = useMemo(() => {
        if (!action) return columns

        return [
            ...columns,
            {
                key: 'action',
                text: '',
                cell: (row, index) => (
                    <TableAction
                        onEdit={() => action.onEdit?.(row, index)}
                        onDelete={() => action.onDelete?.(row, index)}
                    />
                ),
                align: 'justify-center',
                width: 'min-w-20 w-20',
            }
        ]
    }, [columns, action])

    return (
        <div className={twMerge(
            'w-full',
            className
        )}>
            <div className={twMerge(
                'w-full overflow-x-auto rounded-md border border-gray-400 mb-1.5',
                containerClassName
            )}>
                <table className={twMerge(
                    'table-auto w-full',
                    tableClassName
                )}>
                    <TableHeader
                        columns={mergedColumns}
                        className={headerClassName}
                        onSort={onSort}
                        isProcessing={isProcessing}
                    />
                    <TableRow
                        columns={mergedColumns}
                        data={data}
                        className={rowClassName}
                        isProcessing={isProcessing}
                    />
                </table>
            </div>
        </div>
    )
}

export default Table