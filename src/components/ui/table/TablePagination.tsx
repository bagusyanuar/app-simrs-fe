import React, { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

interface IProps {
  className?: string
  totalRows?: number
  pageSizeOptions?: number[]
  pageSize?: number
  onPageSizeChange?: (size: number) => void
  currentPage?: number
  isProcessing?: boolean
}
const TablePagination: React.FC<IProps> = ({
  className = '',
  totalRows = 0,
  pageSizeOptions = [10, 25, 50],
  pageSize = 10,
  onPageSizeChange,
  currentPage = 1,
  isProcessing = false,
}) => {

  const totalPages = useMemo(() => {
    return Math.ceil(totalRows / pageSize)
  }, [totalRows, pageSize])

  const pages = useMemo(() => {
    const maxPages = 5;
    const halfRange = Math.floor(maxPages / 2);

    let start = Math.max(1, currentPage - halfRange);
    let end = Math.min(totalPages, currentPage + halfRange);

    if (end - start + 1 < maxPages) {
      if (start === 1) {
        end = Math.min(totalPages, start + maxPages - 1);
      } else {
        start = Math.max(1, end - maxPages + 1);
      }
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);

  }, [currentPage, totalPages])

  const startRow = useMemo(() => {
    if (currentPage <= 0) {
      return 0
    }
    return (currentPage - 1) * pageSize + 1
  }, [currentPage, pageSize])

  const endRow = useMemo(() => {
    return Math.min(currentPage * pageSize, totalRows);
  }, [currentPage, pageSize, totalRows])

  return (
    <div className={twMerge(
      'w-full flex items-center justify-between text-xs text-neutral-700',
      className
    )}>
      <div className='flex items-center gap-1.5'>
        <span className='leading-none'>
          {`Showing ${startRow} to ${endRow} of ${totalRows} entries`}
        </span>
      </div>
      <div className='flex items-center gap-1.5'>
        <div className='flex items-center gap-1.5'>
          <span className='leading-none'>Rows Per Page :</span>
          <select
            className='text-xs focus:outline-none text-neutral-700 border border-gray-400 rounded py-0.5 disabled:cursor-default disabled:border-gray-200 disabled:text-neutral-700/50'
            value={pageSize}
            onChange={(e) => { onPageSizeChange?.(parseInt(e.currentTarget.value)) }}
            disabled={isProcessing}
          >
            {
              pageSizeOptions.map((v, k) => {
                return (
                  <option key={k} value={v}>{v}</option>
                )
              })
            }
          </select>
        </div>
        <div className='flex items-center gap-1 text-neutral-700 text-xs'>
          <button
            className={twMerge(
              'w-6 h-6 rounded-sm border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-teal-500 hover:text-white hover:border-teal-500 disabled:cursor-default disabled:border-gray-200 disabled:text-neutral-700/50 disabled:hover:bg-white transition-colors duration-300 ease-in-out'
            )}
            disabled={
              isProcessing || currentPage <= 1 || totalRows === 0
            }
          >
            <LuChevronLeft size={12} />
          </button>
          {
            pages.map((page, key) => {
              return (
                <button
                  key={key}
                  className={twMerge(
                    'w-6 h-6 rounded-sm border border-gray-400 flex items-center justify-center cursor-pointer disabled:cursor-default disabled:border-gray-200 disabled:text-neutral-700/50 disabled:hover:bg-white transition-colors duration-300 ease-in-out',
                    currentPage === page ?
                      'bg-teal-500 border-teal-500 text-white'
                      : 'bg-white border-gray-400 text-neutral-700 hover:bg-teal-500 hover:text-white hover:border-teal-500'
                  )}
                >
                  <span>{page}</span>
                </button>
              )
            })
          }
          <button
            className={twMerge(
              'w-6 h-6 rounded-sm border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-teal-500 hover:text-white hover:border-teal-500 disabled:cursor-default disabled:border-gray-200 disabled:text-neutral-700/50 disabled:hover:bg-white transition-colors duration-300 ease-in-out'
            )}
            disabled={
              isProcessing || currentPage === totalPages || totalRows === 0
            }
          >
            <LuChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TablePagination