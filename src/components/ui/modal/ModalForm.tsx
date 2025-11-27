import React from 'react'
import { twMerge } from 'tailwind-merge'
import { motion, AnimatePresence } from 'motion/react'
import { LuX, LuCircleCheck } from 'react-icons/lu'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2'
import { Button } from '@/components/ui/button'

interface IProps {
    show: boolean
    children?: React.ReactNode
    className?: string
    backdropClassName?: string,
    title?: string
    onClose?: () => void
    onSubmit?: () => void
    onProcess?: boolean
}

const ModalForm: React.FC<IProps> = ({
    show,
    children,
    onClose,
    onSubmit,
    backdropClassName = '',
    className = '',
    title = 'Form',
    onProcess = false
}) => {
    return (
        <AnimatePresence>
            {
                show && (
                    <div className={twMerge(
                        'w-full h-dvh bg-gray-900/50 z-50 fixed flex items-center justify-center top-0 left-0',
                        backdropClassName
                    )}>
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}     // mulai di atas dan transparan
                            animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}        // geser ke tengah dan tampil
                            exit={{ y: -100, opacity: 0, transition: { duration: 0.2 } }}
                            className={twMerge(
                                'bg-white w-96 rounded-md drop-shadow-md',
                                className
                            )}
                        >
                            <div className='w-full px-6 py-3 flex items-center justify-between border-b border-gray-400'>
                                <div className='flex items-center gap-1.5'>
                                    <HiOutlineClipboardDocumentList size={16} className='text-neutral-700' />
                                    <span className='text-sm text-neutral-700 font-bold'>{title}</span>
                                </div>
                                <div
                                    className='p-1.5 bg-gray-100 rounded-lg cursor-pointer text-neutral-700 hover:bg-gray-200 transition-colors duration-300 ease-in-out'
                                    onClick={onClose}
                                >
                                    <LuX size={12} />
                                </div>
                            </div>
                            <div className='w-full px-6 py-4'>
                                {children}
                            </div>
                            <div className='w-full px-6 py-3 gap-1.5 flex items-center justify-end border-t border-gray-400'>
                                <Button variant='outline-neutral'
                                    disabled={onProcess}
                                    onClick={onClose}
                                >
                                    <span>Cancel</span>
                                </Button>
                                <Button
                                    onClick={onSubmit}
                                    disabled={onProcess}
                                    onProcess={onProcess}
                                >
                                    <LuCircleCheck size={14} />
                                    <span>Submit</span>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                )
            }
        </AnimatePresence >
    )
}

export default ModalForm