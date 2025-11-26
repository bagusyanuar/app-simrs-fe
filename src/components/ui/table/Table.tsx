import React from 'react'
import { twMerge } from 'tailwind-merge'
import type { TColumn } from './types/type'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

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
}

const Table = <T,>({
    columns,
    data,
    onSort,
    onPageSizeChange,
    className = '',
    containerClassName = '',
    tableClassName = '',
    headerClassName = '',
    rowClassName = '',
    isProcessing = false,
    pageSizeOptions = [10, 25, 50],
}: IProps<T>) => {
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
                        columns={columns}
                        className={headerClassName}
                        onSort={onSort}
                        isProcessing={isProcessing}
                    />
                    <TableRow
                        columns={columns}
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