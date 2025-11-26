import { twMerge } from 'tailwind-merge'
import type { TColumn } from './types/type'
import { Hourglass } from 'react-loader-spinner'

interface IProps<T> {
    columns: TColumn<T>[]
    data: T[]
    className?: string
    isProcessing?: boolean
}

const TableRow = <T,>({
    columns,
    data,
    className = '',
    isProcessing = false
}: IProps<T>) => {
    return (
        <tbody>
            {
                isProcessing ?
                    <tr
                        className={twMerge(
                            'border-b border-gray-400 last:border-0',
                            className
                        )}
                    >
                        <td colSpan={columns.length}>
                            <div className='w-full h-72 flex flex-col gap-1.5 items-center justify-center'>
                                <Hourglass
                                    visible={true}
                                    height="40"
                                    width="40"
                                />
                                <span className='text-xs text-neutral-700'>Loading...</span>
                            </div>
                        </td>
                    </tr>
                    : (
                        data.length <= 0 ?
                            <tr>
                                <td colSpan={columns.length}>
                                    <div className='w-full h-72 flex flex-col gap-1.5 items-center justify-center'>
                                        <img src={`/static/images/no-data.png`} className='w-16 h-16' />
                                        <span className='text-xs text-neutral-700'>No data available</span>
                                    </div>
                                </td>
                            </tr>
                            : data.map((data, dataKey) => {
                                return (
                                    <tr
                                        key={dataKey}
                                        className={twMerge(
                                            'border-b border-gray-400 last:border-0 text-sm',
                                            className
                                        )}
                                    >
                                        {
                                            columns.map((column, columnKey) => {
                                                return (
                                                    <td
                                                        key={columnKey}
                                                        className={twMerge(
                                                            'text-neutral-700',
                                                            typeof column.cellClassName === 'function'
                                                                ? column.cellClassName(data, dataKey)
                                                                : column.cellClassName ?? '',
                                                            column.width ?? ''
                                                        )}
                                                    >
                                                        <div className={twMerge(
                                                            'w-full flex items-center px-2.5 py-2',
                                                            column.align ?? 'justify-start',
                                                        )}>
                                                            {column.cell ? column.cell(data, dataKey) : <></>}
                                                        </div>
                                                    </td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                    )
            }
        </tbody>
    )
}

export default TableRow