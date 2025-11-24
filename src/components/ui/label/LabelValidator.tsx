import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
    text?: string
    className?: string
}

const LabelValidator: React.FC<IProps> = ({
    text = 'error',
    className = ''
}) => {
    return (
        <span className={twMerge(
            'text-xs text-red-500 leading-normal block',
            className
        )}>
            {text}
        </span>
    )
}

export default LabelValidator