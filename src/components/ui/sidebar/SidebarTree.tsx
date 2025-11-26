import React, { useState, useRef, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { LuCircle, LuChevronRight } from 'react-icons/lu'
import { Link } from 'react-router'

type TItem = {
    to?: string
    text?: string
    isActive?: boolean
}

interface IProps {
    text?: string
    icon?: React.ReactNode
    isActive?: boolean
    items?: TItem[]
    className?: string
}
const SidebarTree: React.FC<IProps> = ({
    icon,
    text = 'Menu',
    isActive = false,
    items = [],
    className = ''
}) => {

    const [open, setOpen] = useState<boolean>(false)
    const [height, setHeight] = useState<number>(0)
    const collapsibleRef = useRef<HTMLDivElement>(null)

    const handleOpen = () => {
        setOpen(prev => !prev)
    }

    useEffect(() => {
        setOpen(isActive);
    }, [isActive]);

    useEffect(() => {
        if (open && collapsibleRef.current) {
            setHeight(collapsibleRef.current.scrollHeight)
        } else {
            setHeight(0)
        }
    }, [open])

    return (
        <div className='w-full relative'>
            <div className={twMerge(
                'group w-full flex items-center justify-between text-sm px-3 py-3 font-light rounded-md cursor-pointer text-white/80 hover:text-white hover:bg-white/20 focus:ring-0 focus:outline-none transition-all duration-300 ease-in-out',
                open && 'text-white bg-white/20 backdrop-blur',
                className
            )}
                onClick={handleOpen}
            >
                <div className='flex items-center gap-2'>
                    {icon ?? <LuCircle size={16} />}
                    <span>{text}</span>
                </div>
                <LuChevronRight
                    size={16}
                    className={twMerge(
                        'transition-transform duration-300 ease-in-out',
                        open && 'rotate-90'
                    )}
                />
            </div>
            <div
                ref={collapsibleRef}
                style={{ height }}
                className={twMerge(
                    'w-full opacity-0 transition-all duration-300 ease-in-out',
                    open && `opacity-100`
                )}>
                <div className='w-full ps-5 pt-1.5'>
                    <div className='w-full ps-1.5 flex flex-col gap-0.5 border-l border-white/50'>
                        {items.map((v, k) => {
                            return <Link
                                key={k}
                                to={v.to || '#'}
                                className={twMerge(
                                    'px-2 py-1.5 w-full rounded-sm text-sm font-light text-white/80 cursor-pointer hover:bg-white/20  hover:text-white transition-all duration-300 ease-in-out focus:ring-0 focus:outline-none',
                                    v.isActive && 'text-white bg-white/20'
                                )}
                            >
                                {v.text}
                            </Link>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarTree