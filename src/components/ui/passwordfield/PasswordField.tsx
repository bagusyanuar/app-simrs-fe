import React, { useState, type HTMLInputTypeAttribute } from 'react'
import { twMerge } from 'tailwind-merge'
import { LuLock, LuEye, LuEyeOff } from 'react-icons/lu'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  inputClassName?: string
  isError?: boolean
  placeholder?: string
  disabled?: boolean
}

const PasswordField = React.forwardRef<HTMLInputElement, IProps>(
  (
    {
      className = '',
      inputClassName = '',
      isError = false,
      placeholder = '',
      disabled = false,
      ...props
    }, ref
  ) => {
    const [type, setType] = useState<HTMLInputTypeAttribute>('password')

    const handleChangeType = () => {
      if (!disabled) {
        setType(prev => prev === 'password' ? 'text' : 'password');
      }
    }

    return (
      <div className={twMerge(
        'relative group w-full border border-neutral-400 rounded-md focus-within:border-neutral-700 transition-[border] duration-300 ease-in-out',
        isError && 'border-red-500 focus-within:border-red-500',
        className
      )}>
        <div
          className={twMerge(
            'h-full rounded-l-md absolute top-0 left-2.5 flex items-center justify-center text-neutral-500 group-focus-within:text-neutral-700 transition-colors duration-300 ease-in-out',
            isError && 'text-red-500 group-focus-within:text-red-500'
          )}
        >
          <LuLock size={14} />
        </div>
        <input
          ref={ref}
          type={type}
          className={twMerge(
            'w-full py-2.5 px-8.5 text-sm leading-none rounded-md text-neutral-700 focus:text-neutral-700 focus:ring-0 focus:outline-none placeholder:text-neutral-400 disabled:bg-neutral-200 transition-colors duration-300 ease-in-out',
            inputClassName
          )}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
        <div
          className={twMerge(
            'h-full rounded-r-md cursor-pointer absolute top-0 right-2.5 flex items-center justify-center text-neutral-500 group-focus-within:text-neutral-700 transition-colors duration-300 ease-in-out',
            isError && 'text-red-500 group-focus-within:text-red-500'
          )}
          onClick={handleChangeType}
        >
          {type === 'text' ? <LuEye size={14} /> : <LuEyeOff size={14} />}
        </div>
      </div>
    )
  }
)

export default PasswordField