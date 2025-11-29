export type ToastType = "success" | "error" | "info";

export type ToastOptions = {
    message: string;
    type?: ToastType;
    duration?: number;
    onClose?: () => void
}

type ToastHandler = {
    show: (options: ToastOptions) => void;
    success: (message: string, duration?: number, onClose?: () => void) => void;
    error: (message: string, duration?: number, onClose?: () => void) => void;
    info: (message: string, duration?: number, onClose?: () => void) => void;
}

const toast: ToastHandler = {
    show: () => { },
    success: (message, duration, onClose) => {
        toast.show({
            message: message,
            type: 'success',
            duration: duration,
            onClose
        })
    },
    error: (message, duration, onClose) => {
        toast.show({
            message: message,
            type: 'error',
            duration: duration,
            onClose
        })
    },
    info: (message, duration, onClose) => {
        toast.show({
            message: message,
            type: 'info',
            duration: duration,
            onClose
        })
    },
}

export default toast