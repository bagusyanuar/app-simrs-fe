import React from 'react'
import { twMerge } from 'tailwind-merge'
import { motion, AnimatePresence } from 'motion/react'

interface IProps {
    show: boolean
    children?: React.ReactNode
    className?: string
    backdropClassName?: string,
}
const ModalConfirmation: React.FC<IProps> = ({
    show,
    children,
    backdropClassName = '',
    className = '',
}) => {
    return (
        <AnimatePresence>
            {
                show && (
                    <div className={twMerge(
                        'w-full h-dvh bg-gray-900/50 z-100 fixed flex items-center justify-center top-0 left-0',
                        backdropClassName
                    )}>
                        <motion.div
                            initial={{ scale: 0.2, opacity: 0 }} // mulai agak besar & transparan
                            animate={{
                                scale: 1,
                                opacity: 1,
                                transition: { duration: 0.15, ease: 'easeOut' },
                            }}
                            exit={{
                                scale: 0.2,
                                opacity: 0,
                                transition: { duration: 0.15, ease: 'easeIn' },
                            }}
                            className={twMerge(
                                'bg-white w-96 rounded-md drop-shadow-md',
                                className
                            )}
                        >
                            {children}
                        </motion.div>
                    </div>
                )
            }
        </AnimatePresence>
    )
}

export default ModalConfirmation