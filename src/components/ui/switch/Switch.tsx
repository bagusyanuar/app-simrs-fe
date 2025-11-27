import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface IProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    className?: string;
    thumbClassName?: string;
    isError?: boolean;
    disabled?: boolean;
}

const Switch = React.forwardRef<HTMLInputElement, IProps>(
    (
        {
            className = "",
            thumbClassName = "",
            isError = false,
            disabled = false,
            onChange,
            ...props
        },
        ref
    ) => {
        const inputRef = React.useRef<HTMLInputElement | null>(null);

        const setRefs = (el: HTMLInputElement | null) => {
            inputRef.current = el;

            if (typeof ref === "function") ref(el);
            else if (ref && "current" in ref) ref.current = el;
        };

        const [checked, setChecked] = React.useState(false);

        // 🔥 Sync dari RHF → Switch
        // eslint-disable-next-line react-hooks/exhaustive-deps
        useEffect(() => {
            if (inputRef.current) {
                setChecked(inputRef.current.checked);
            }
        });

        const toggle = () => {
            if (!inputRef.current || disabled) return;

            inputRef.current.click(); // ✔ memicu event asli browser (RHF menangkap)
            setChecked(inputRef.current.checked); // update UI
        };

        return (
            <div className={twMerge("relative inline-flex items-center", className)}>
                <input
                    ref={setRefs}
                    type="checkbox"
                    className="hidden"
                    disabled={disabled}
                    onChange={(e) => {
                        setChecked(e.target.checked); // RHF → UI
                        onChange?.(e);
                    }}
                    {...props} // ⭐ register() menangani name, ref, defaultValue, reset(), dll
                />

                <button
                    type="button"
                    role="switch"
                    aria-checked={checked}
                    disabled={disabled}
                    onClick={toggle}
                    className={twMerge(
                        `
              h-5 w-10 rounded-full transition-colors duration-300 ease-in-out
              ${checked ? "bg-teal-500" : "bg-neutral-300"}
              ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
              ${isError ? "ring-1 ring-red-500" : ""}
            `
                    )}
                >
                    <span
                        className={twMerge(
                            `
                block h-4 w-4 bg-white rounded-full transform transition-transform duration-300 ease-in-out
                ${checked ? "translate-x-5.5" : "translate-x-0.5"}
              `,
                            thumbClassName
                        )}
                    />
                </button>
            </div>
        );
    }
);

export default Switch;
