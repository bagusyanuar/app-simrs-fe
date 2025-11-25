import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
    className?: string
}
const ImageBrand: React.FC<IProps> = ({
    className = ''
}) => {
    return (
        <img
            src='/static/images/logo.png'
            className={twMerge(
                'h-16 w-fit mb-1',
                className
            )}
        />
    )
}

export default ImageBrand