import React from "react";
import Select, { type Props as SelectProps } from "react-select";
import { twMerge } from "tailwind-merge";

interface IProps extends SelectProps {
    className?: string;
    isError?: boolean;
}

/**
 * Tailwind-styled React-Select component
 * without prefix/suffix icons.
 */
const ReactSelect = ({
    className = "",
    isError = false,
    ...props
}: IProps) => {
    return (
        <div
            className={twMerge(
                "w-full",
                className
            )}
        >
            <Select
                {...props}
                classNames={{
                    container: ({ isFocused }) => twMerge(
                        "border border-gray-400 rounded-md",
                        isFocused && 'ring-0 shadow-none border-gray-400'
                    ),
                    indicatorsContainer: () => "hidden",
                    control: () =>
                        twMerge(
                            "border-0 rounded-md"
                        ),

                    valueContainer: () =>
                        "px-0 py-1 text-sm text-neutral-700 rounded-md bg-red-500",

                    placeholder: () =>
                        "text-neutral-400 text-sm",

                    input: () =>
                        "text-neutral-700",

                    singleValue: () =>
                        "text-neutral-700 text-sm",

                    menu: () =>
                        "mt-1 border border-neutral-300 rounded-md shadow-lg bg-white",

                    option: ({ isSelected, isFocused }) =>
                        twMerge(
                            "cursor-pointer px-3 py-2 text-sm",
                            isSelected && "bg-neutral-700 text-white",
                            !isSelected && isFocused && "bg-neutral-100",
                            !isSelected && !isFocused && "text-neutral-700"
                        )
                }}
                styles={{
                    container: (provided) => ({
                        ...provided,
                        height: 'fit-content'
                    }),
                    indicatorSeparator: () => ({ display: "none" }),
                    control: (provided, state) => ({
                        ...provided,
                        border: 'none',
                        boxShadow: 'none',
                        borderRadius: 'inherit',
                        height: 'fit-content',
                        minHeight: 'fit-content'
                    }),
                    indicatorsContainer: (provided, state) => ({
                        ...provided,
                        display: 'none'
                    })
                }}
            />
        </div>
    );
};

export default ReactSelect;
