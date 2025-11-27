import React from "react";
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
            defaultChecked,
            ...props
        },
        ref
    ) => {
        const [checked, setChecked] = React.useState(!!defaultChecked);

        const internalRef = React.useRef<HTMLInputElement>(null);

        const setRefs = (el: HTMLInputElement | null) => {
            internalRef.current = el;

            if (typeof ref === "function") ref(el);
            else if (ref && "current" in ref) ref.current = el;
        };

        const toggle = () => {
            if (!internalRef.current || disabled) return;

            const newValue = !checked;
            setChecked(newValue);

            internalRef.current.checked = newValue;

            // 🚀 EVENT PALSU YANG VALID UNTUK RHF
            onChange?.({
                target: {
                    name: internalRef.current.name,
                    type: "checkbox",
                    checked: newValue,
                    value: newValue,
                },
            } as unknown as React.ChangeEvent<HTMLInputElement>);
        };

        return (
            <div className={twMerge("relative inline-flex items-center", className)}>
                <input
                    ref={setRefs}
                    type="checkbox"
                    defaultChecked={defaultChecked}
                    className="hidden"
                    disabled={disabled}
                    onChange={onChange}
                    {...props}
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
