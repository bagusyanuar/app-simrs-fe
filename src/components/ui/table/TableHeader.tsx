import { twMerge } from 'tailwind-merge'
import type { TColumn } from './types/type'
import { LuArrowDownUp } from 'react-icons/lu'

interface IProps<T> {
    columns: TColumn<T>[]
    className?: string
    onSort?: (key?: string) => void
    isProcessing?: boolean
}

const TableHeader = <T,>({
    columns,
    className = '',
    onSort = () => { },
    isProcessing = false
}: IProps<T>) => {
    return (
        <thead>
            <tr className={twMerge(
                'rounded-md bg-gray-100 border-b border-gray-400 text-sm text-neutral-700',
                className
            )}>
                {
                    columns.map((header, key) => {
                        return (
                            <th
                                key={key}
                                className={twMerge(
                                    'font-normal',
                                    header.columnClassName,
                                    header.width ?? '',
                                )}
                            >
                                <div
                                    className={twMerge(
                                        'w-full flex items-center px-2.5 py-2',
                                        header.align ?? 'justify-start',
                                    )}
                                >
                                    {header.text}
                                    {
                                        header.sortable && <LuArrowDownUp
                                            size={10}
                                            className={twMerge(
                                                'ms-1.5 cursor-pointer',
                                                isProcessing && 'pointer-events-none'
                                            )}
                                            onClick={() => {
                                                if (isProcessing) return
                                                onSort?.(header.key)
                                            }}
                                        />
                                    }
                                </div>
                            </th>
                        )
                    })
                }

            </tr>
        </thead>
    )
}

export default TableHeader