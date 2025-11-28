import Select, {
    type Props as SelectProps,
    components,
    type GroupBase
} from "react-select";
import { twMerge } from "tailwind-merge";
import { LuChevronDown, LuX } from 'react-icons/lu'

interface IProps<OptionType> extends SelectProps<OptionType, false, GroupBase<OptionType>> {
    className?: string;
    isError?: boolean;
    placeholder?: string
    disabled?: boolean
    isClearable?: boolean
}

const ReactSelect = <OptionType,>({
    className = "",
    isError = false,
    placeholder = 'choose an option',
    disabled = false,
    isClearable = false,
    ...props
}: IProps<OptionType>) => {
    return (
        <div
            className={twMerge(
                "w-full",
                className
            )}
        >
            <Select<OptionType, false, GroupBase<OptionType>>
                {...props}
                isDisabled={disabled}
                placeholder={placeholder}
                isClearable={isClearable}
                components={{
                    DropdownIndicator: props => (
                        <components.DropdownIndicator {...props}>
                            <LuChevronDown
                                size={16}
                                className="text-inherit cursor-pointer"
                            />
                        </components.DropdownIndicator>
                    ),
                    ClearIndicator: props => (
                        <components.ClearIndicator {...props}>
                            <LuX
                                size={14}
                                className="text-inherit cursor-pointer"
                            />
                        </components.ClearIndicator>
                    )
                }}
                classNames={{
                    container: ({ isFocused }) => twMerge(
                        "border border-neutral-400 rounded-md transition-colors duration-300 ease-in-out",
                        isFocused && 'ring-0 shadow-none border-neutral-700',
                        isError && 'border-red-500'
                    ),

                    control: () => twMerge(
                        "!border-none !shadow-none !rounded-md !h-fit !min-h-fit"
                    ),

                    dropdownIndicator: () => twMerge(
                        '!pe-2.5 !ps-2.5 !cursor-pointer !text-neutral-700',
                        isClearable && '!pe-2.5 !ps-0.5'
                    ),

                    clearIndicator: () => twMerge(
                        '!ps-2.5 !pe-1 ! !cursor-pointer !text-neutral-700',
                    ),

                    valueContainer: () =>
                        "!px-2.5 !py-[0.4rem] !leading-none !text-sm text-neutral-700 rounded-md",

                    placeholder: () =>
                        "text-neutral-400 text-sm",

                    input: () =>
                        "text-neutral-700",

                    singleValue: () =>
                        "text-neutral-300 text-sm",

                    menu: () =>
                        "mt-1 border border-neutral-400 !rounded-md !px-1.5 !py-1",

                    menuList: () => "!rounded-md",

                    option: ({ isSelected, isFocused }) =>
                        twMerge(
                            "!cursor-pointer px-2.5 py-1.5 !text-xs rounded-sm transition-colors duration-300 ease-in-out",
                            isSelected && "!bg-teal-500 text-white",
                            !isSelected && isFocused && "!bg-teal-100 !text-neutral-700",
                            !isSelected && !isFocused && "!text-neutral-700"
                        )
                }}
                styles={{
                    container: (provided) => ({
                        ...provided,
                        height: 'fit-content'
                    }),
                    indicatorSeparator: () => ({ display: "none" }),
                }}
            />
        </div>
    );
};

export default ReactSelect;
