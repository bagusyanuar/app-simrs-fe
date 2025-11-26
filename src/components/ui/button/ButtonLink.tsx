import React from 'react'
import { twMerge } from 'tailwind-merge'
import type { IconType } from 'react-icons'
import { Link } from 'react-router'

interface IProps {
    to?: string
    className?: string,
    children?: React.ReactNode
    size?: 'small' | 'normal' | 'large'
    variant?: 'fill' | 'outline' | 'outline-neutral'
    icon?: IconType
}

const ButtonLink: React.FC<IProps> = ({
    children,
    icon: Icon,
    to = '#',
    className = '',
    size = 'normal',
    variant = 'fill'
}) => {
    return (
        <Link
            to={to}
            className={twMerge(
                'button',
                variant,
                size,
                className
            )}
        >
            {Icon && <Icon size={size === 'small' ? 12 : 14} />}
            {children}
        </Link>
    )
}

export default ButtonLink