import { useState, useEffect } from 'react'
import {
    LuCircleCheck,
    LuCircleX,
    LuInfo,
} from 'react-icons/lu'
import { motion, AnimatePresence } from 'motion/react'
import toast, { type ToastOptions, type ToastType } from './toast'

declare global {
    interface Window {
        __toastTimer?: ReturnType<typeof setTimeout>;
    }
}

const icons: Record<ToastType, React.ReactNode> = {
    success: <LuCircleCheck size={26} className="text-green-500" />,
    error: <LuCircleX size={26} className="text-red-500" />,
    info: <LuInfo size={26} className="text-blue-500" />,
}

const titles: Record<ToastType, string> = {
    success: 'Success',
    error: 'Error',
    info: 'Info',
}

const ToastContainer = () => {

    const [activeToast, setActiveToast] = useState<ToastOptions | null>(null);

    useEffect(() => {
        toast.show = (t: ToastOptions) => {
            setActiveToast(t);

            // Hapus timer sebelumnya kalau ada
            if (window.__toastTimer) {
                clearTimeout(window.__toastTimer);
            }

            // Hilangkan toast setelah durasi tertentu
            window.__toastTimer = setTimeout(() => {
                setActiveToast(null);
                if (t.onClose) {
                    t.onClose?.()
                }
            }, t.duration ?? 3000);
        };

        return () => {
            if (window.__toastTimer) {
                clearTimeout(window.__toastTimer);
            }
        };
    }, [])

    return (
        <AnimatePresence>
            {
                activeToast && <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
                    exit={{ y: -30, opacity: 0, transition: { duration: 0.3 } }}
                    className='absolute top-8 left-1/2 z-300 -translate-x-1/2 bg-white text-sm w-70 max-h-18 rounded-lg shadow-2xl border border-gray-400'>
                    <div className='w-full h-full flex items-start px-3 py-3 gap-1.5'>
                        {icons[activeToast?.type ?? 'info']}
                        <div className='flex-1 flex flex-col'>
                            <span className='text-sm text-neutral-700 font-semibold leading-[1.2]'>
                                {titles[activeToast?.type ?? 'info']}
                            </span>
                            <span className='text-xs text-neutral-700 leading-[1.3] overflow-hidden  [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]'>
                                {activeToast?.message ?? 'Message'}
                            </span>
                        </div>
                    </div>
                </motion.div>
            }

        </AnimatePresence>
    )
}

export default ToastContainer