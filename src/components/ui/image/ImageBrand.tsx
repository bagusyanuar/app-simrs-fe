import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
    className?: string
    variant?: 'base' | 'white'
}
const ImageBrand: React.FC<IProps> = ({
    className = '',
    variant = 'base'
}) => {
    return (
        <img
            src={variant === 'white' ? '/static/images/logo-white.png' : '/static/images/logo.png'}
            className={twMerge(
                'h-16 w-fit',
                className
            )}
        />
    )
}

export default ImageBrand