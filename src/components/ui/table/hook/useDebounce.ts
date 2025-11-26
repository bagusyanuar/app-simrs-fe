import { useEffect, useRef, useState } from "react";

export function useDebounce<T>(value: T, delay: number = 500) {
    const [debounced, setDebounced] = useState<T>(value);
    const mounted = useRef(false);

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            return;
        }

        const handler = setTimeout(() => {
            setDebounced(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debounced;
}
