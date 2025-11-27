import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
    text?: string
    className?: string
}
const LabelForm: React.FC<IProps> = ({
    text = 'Label',
    className = ''
}) => {
    return (
        <span className={twMerge(
            'block text-neutral-700 text-xs leading-normal font-semibold mb-0.5',
            className
        )}>
            {text}
        </span>
    )
}

export default LabelForm