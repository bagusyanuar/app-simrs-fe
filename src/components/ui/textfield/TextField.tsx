import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
    inputClassName?: string
    prefixIcon?: React.ReactNode
    suffixIcon?: React.ReactNode
    type?: Extract<React.HTMLInputTypeAttribute, "text" | "number">,
    isError?: boolean
    placeholder?: string
    disabled?: boolean
}

const TextField = React.forwardRef<HTMLInputElement, IProps>(
    (
        {
            className = '',
            inputClassName = '',
            prefixIcon,
            suffixIcon,
            type = 'text',
            isError = false,
            placeholder = '',
            disabled = false,
            ...props
        }, ref
    ) => {
        return (
            <div className={twMerge(
                'relative group w-full border border-neutral-400 rounded-md focus-within:border-neutral-700 transition-[border] duration-300 ease-in-out',
                isError && 'border-red-500 focus-within:border-red-500',
                className
            )}>
                {prefixIcon && <div
                    className={twMerge(
                        'h-full rounded-l-md absolute top-0 left-2.5 flex items-center justify-center text-neutral-500 group-focus-within:text-neutral-700 transition-colors duration-300 ease-in-out',
                        isError && 'text-red-500 group-focus-within:text-red-500'
                    )}
                >
                    {prefixIcon}
                </div>}
                <input
                    ref={ref}
                    type={type}
                    className={twMerge(
                        'w-full py-2.5 px-2.5 text-sm leading-none rounded-md text-neutral-700 focus:text-neutral-700 focus:ring-0 focus:outline-none disabled:bg-neutral-200 placeholder:text-neutral-400 transition-colors duration-300 ease-in-out',
                        prefixIcon && 'ps-8.5',
                        suffixIcon && 'pe-8.5',
                        inputClassName
                    )}
                    placeholder={placeholder}
                    disabled={disabled}
                    {...props}
                />
                {suffixIcon && <div
                    className={twMerge(
                        'h-full rounded-r-md absolute top-0 right-2.5 flex items-center justify-center text-neutral-500 group-focus-within:text-neutral-700 transition-colors duration-300 ease-in-out',
                        isError && 'text-red-500 group-focus-within:text-red-500'
                    )}
                >
                    {suffixIcon}
                </div>}
            </div>
        )
    }
)

export default TextField