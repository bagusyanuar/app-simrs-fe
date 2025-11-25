import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
    title?: string
    subTitle?: string
    className?: string
}

const PageTitle: React.FC<IProps> = ({
    title = 'Page Title',
    subTitle = 'Page Sub Title',
    className = ''
}) => {
    return (
        <div className={twMerge(
            'w-full flex flex-col mb-5',
            className
        )}>
            <h4 className='text-neutral-700 text-lg font-semibold'>{title}</h4>
            <h5 className='text-neutral-500 text-sm'>{subTitle}</h5>
        </div>
    )
}

export default PageTitle