import React, { useState, useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { LuSearch } from 'react-icons/lu'
import { useDebounce } from './hook/useDebounce'

interface IProps {
  className?: string
  disabled?: boolean
  debounceTime?: number
  onSearch?: (param: string) => void
}

const TableSearch: React.FC<IProps> = ({
  onSearch,
  className = '',
  disabled = false,
  debounceTime = 500,
}) => {
  const first = useRef(true)
  const [value, setValue] = useState<string>('')

  const debouncedValue = useDebounce(value, debounceTime)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    onSearch?.(debouncedValue)
  }, [debouncedValue, onSearch])

  return (
    <div className={twMerge(
      'relative group w-48 border border-neutral-400 rounded-md focus-within:border-neutral-700 transition-[border] duration-300 ease-in-out',
      className
    )}>
      <div
        className='h-full rounded-l-md absolute top-0 left-2.5 flex items-center justify-center text-neutral-500 group-focus-within:text-neutral-700 transition-colors duration-300 ease-in-out'
      >
        <LuSearch size={14} />
      </div>
      <input
        type="text"
        className={twMerge(
          'w-full py-2.5 ps-8 pe-2.5 text-sm leading-none border-0 rounded-md text-neutral-500 focus:text-neutral-700 focus:ring-0 focus:outline-none disabled:bg-neutral-200 placeholder:text-neutral-400 transition-colors duration-300 ease-in-out',
        )}
        value={value}
        onChange={handleChange}
        placeholder="search..."
        disabled={disabled}
      />
    </div>
  )
}

export default TableSearch