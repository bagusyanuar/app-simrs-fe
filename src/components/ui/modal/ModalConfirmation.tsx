import React from 'react'
import { twMerge } from 'tailwind-merge'
import { motion, AnimatePresence } from 'motion/react'
import { GrCircleQuestion } from 'react-icons/gr'
import { Button } from '@/components/ui/button'

interface IProps {
    show: boolean
    title?: string
    description?: string
    className?: string
    backdropClassName?: string
    onSubmit?: () => void
    onClose?: () => void
}
const ModalConfirmation: React.FC<IProps> = ({
    show,
    onSubmit,
    onClose,
    backdropClassName = '',
    className = '',
    title = '',
    description = '',
}) => {
    return (
        <AnimatePresence>
            {
                show && (
                    <div className={twMerge(
                        'w-full h-dvh bg-gray-900/50 z-100 fixed top-0 left-0',
                        backdropClassName
                    )}>
                        <motion.div
                            // initial={{ scale: 0.2, opacity: 0 }} // mulai agak besar & transparan
                            // animate={{
                            //     scale: 1,
                            //     opacity: 1,
                            //     transition: { duration: 0.15, ease: 'easeOut' },
                            // }}
                            // exit={{
                            //     scale: 0.2,
                            //     opacity: 0,
                            //     transition: { duration: 0.15, ease: 'easeIn' },
                            // }}
                            initial={{ y: -30, opacity: 0 }}     // mulai di atas dan transparan
                            animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}        // geser ke tengah dan tampil
                            exit={{ y: -30, opacity: 0, transition: { duration: 0.2 } }}
                            className={twMerge(
                                'absolute bg-white w-100 rounded-md drop-shadow-md top-8 left-1/2 -translate-x-1/2',
                                className
                            )}
                        >
                            <div className='w-full p-3'>
                                <div className='flex items-start gap-3'>
                                    <GrCircleQuestion size={36} className='text-orange-500' />
                                    <div className='flex-1 flex flex-col'>
                                        <span className='text-sm text-neutral-700 font-semibold'>{title}</span>
                                        <span className='text-xs text-neutral-500'>{description}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex items-center gap-1 justify-end border-t border-gray-400 px-3 py-2'>
                                <Button
                                    variant='outline-neutral'
                                    size='small'
                                    className='rounded-sm'
                                    onClick={onClose}
                                >
                                    <span>Batal</span>
                                </Button>
                                <Button
                                    size='small'
                                    className='rounded-sm'
                                    onClick={onSubmit}
                                >
                                    <span>Lanjutkan</span>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                )
            }
        </AnimatePresence>
    )
}

export default ModalConfirmation