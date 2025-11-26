import React, { useRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { twMerge } from 'tailwind-merge'
import { LuEllipsisVertical, LuTrash, LuPencil } from 'react-icons/lu'
import { motion } from 'motion/react'

interface IProps {
    className?: string
    onEdit?: () => void
    onDelete?: () => void
}

const TableAction: React.FC<IProps> = ({
    className = '',
    onEdit,
    onDelete
}) => {

    const buttonRef = useRef<HTMLDivElement>(null)
    const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null)

    const toggleDropdown = () => {
        if (!anchorRect) {
            const rect = buttonRef.current!.getBoundingClientRect()
            setAnchorRect(rect)
        } else {
            setAnchorRect(null)
        }
    }

    return (
        <div className='relative'>
            <div
                ref={buttonRef}
                onClick={toggleDropdown}
                className={twMerge(
                    'w-8 h-8 rounded-lg bg-teal-50 hover:bg-teal-100 cursor-pointer hover:text-neutral-700 flex items-center justify-center text-neutral-500 transition-colors duration-300 ease-in-out',
                    className
                )}>
                <LuEllipsisVertical size={14} />
            </div>

            {anchorRect && (
                <DropdownMenu
                    anchorRef={buttonRef}
                    onClose={() => setAnchorRect(null)}
                >
                    <div
                        className="w-full px-1.5 py-1 rounded-sm flex items-center gap-1.5 text-neutral-700 text-xs cursor-pointer hover:bg-gray-200"
                        onClick={onEdit}
                    >
                        <LuPencil size={12} />
                        <span>Edit</span>
                    </div>

                    <div
                        className="w-full px-1.5 py-1 rounded-sm flex items-center gap-1.5 text-neutral-700 text-xs cursor-pointer hover:bg-gray-200"
                        onClick={onDelete}
                    >
                        <LuTrash size={12} />
                        <span>Delete</span>
                    </div>
                </DropdownMenu>
            )}
        </div>
    )
}

export default TableAction


// ===================================================================
// ======================   DROPDOWN PORTAL   =========================
// ===================================================================

interface IDropdownProps {
    anchorRef: React.RefObject<HTMLElement | null>,
    children?: React.ReactNode
    onClose?: () => void
    className?: string
}

const DropdownMenu: React.FC<IDropdownProps> = ({
    anchorRef,
    children,
    onClose,
    className = ''
}) => {

    const ref = useRef<HTMLDivElement>(null)
    const [pos, setPos] = useState({ top: 0, left: 0, flipped: false })



    // Position calculation + auto-flip
    function calculatePosition() {
        if (!anchorRef.current || !ref.current) return

        const anchor = anchorRef.current.getBoundingClientRect()
        const menuWidth = ref.current.offsetWidth
        const menuHeight = ref.current.offsetHeight

        const viewportHeight = window.innerHeight

        /** Default position: bottom */
        let top = anchor.bottom + 6
        const left = anchor.right - menuWidth
        let flipped = false

        // Auto flip
        if (anchor.bottom + menuHeight + 10 > viewportHeight) {
            top = anchor.top - menuHeight - 6
            flipped = true
        }

        setPos({ top, left, flipped })
    }

    // Calculate the position initially
    useEffect(() => {
        calculatePosition()
    }, [])

    // Update position on resize + scroll
    useEffect(() => {
        const handle = () => calculatePosition()
        window.addEventListener('resize', handle)
        window.addEventListener('scroll', handle, true)
        return () => {
            window.removeEventListener('resize', handle)
            window.removeEventListener('scroll', handle, true)
        }
    }, [])

    // Click outside
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as Node)) {
                onClose?.()
            }
        }
        window.addEventListener('mousedown', handleClick)
        return () => window.removeEventListener('mousedown', handleClick)
    }, [onClose])

    return ReactDOM.createPortal(
        <motion.div
            ref={ref}
            className={twMerge(
                'absolute z-300 bg-white border border-gray-400 rounded-md shadow-md p-1.5 w-32 flex flex-col gap-1',
                className
            )}
            style={{
                top: pos.top,
                left: pos.left,
            }}
            initial={{ opacity: 0, y: pos.flipped ? 8 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: pos.flipped ? 8 : -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
        >
            {children}
        </motion.div>,
        document.body
    )
}
