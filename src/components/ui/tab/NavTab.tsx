import React from 'react'
import { twMerge } from 'tailwind-merge'

type TChild = {
    text?: string
    onClick?: () => void
    isActive?: boolean
}

interface IProps {
    tabs?: TChild[]
    className?: string
}

const NavTab: React.FC<IProps> = ({
    tabs = [],
    className = ''
}) => {
    return (
        <div className={twMerge(
            'flex items-center px-1 py-1 bg-white w-fit rounded-md drop-shadow-md',
            className
        )}>
            {
                tabs.map((tab, key) => {
                    return (
                        <div
                            key={key}
                            className={twMerge(
                                'px-1.5 py-1.5 text-xs text-neutral-700  rounded-sm cursor-pointer transition-colors ease-in-out duration-300',
                                tab.isActive && 'text-white bg-teal-500'
                            )}
                            onClick={tab.onClick}
                        >
                            <span>{tab.text}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NavTab