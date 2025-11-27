import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string
    inputClassName?: string
    isError?: boolean
    placeholder?: string
    disabled?: boolean
}

const TextAreaField = React.forwardRef<HTMLTextAreaElement, IProps>(
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
        return (
            <div className={twMerge(
                'relative group w-full border border-neutral-400 rounded-md focus-within:border-neutral-700 transition-[border] duration-300 ease-in-out',
                isError && 'border-red-500 focus-within:border-red-500',
                className
            )}>
                <textarea
                    ref={ref}
                    className={twMerge(
                        'w-full py-2.5 px-2.5 text-sm leading-none rounded-md text-neutral-700 focus:text-neutral-700 focus:ring-0 focus:outline-none disabled:bg-neutral-200 placeholder:text-neutral-400 transition-colors duration-300 ease-in-out',
                        inputClassName
                    )}
                    placeholder={placeholder}
                    disabled={disabled}
                    {...props}
                />
            </div>
        )
    }
)

export default TextAreaField