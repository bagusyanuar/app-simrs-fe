import { twMerge } from 'tailwind-merge'
import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form'
import { ReactSelect } from '@/components/ui/select'
import { LabelForm, LabelValidator } from '@/components/ui/label'
import { type SingleValue } from "react-select";

type Option = {
    value: string | number | null;
    label: string;
    [key: string]: unknown;
}

interface IProps<T extends FieldValues> {
    control: Control<T>
    name: Path<T>
    options?: readonly Option[]
    className?: string
    isError?: boolean
    errorMessage?: string
    placeholder?: string
    disabled?: boolean
    label?: string
    isClearable?: boolean
}

const FormSelect = <T extends FieldValues,>({
    control,
    name,
    options = [],
    label = '',
    className = '',
    isError = false,
    errorMessage = '',
    placeholder = '',
    disabled = false,
    isClearable = false
}: IProps<T>) => {
    return (
        <div className={twMerge(
            'w-full',
            className
        )}>
            {label !== '' && <LabelForm text={label} />}
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <ReactSelect
                        {...field}
                        placeholder={placeholder}
                        isError={isError}
                        options={options}
                        disabled={disabled}
                        value={options.find(opt => opt.value === field.value) ?? null}
                        onChange={(val: SingleValue<Option>) => {
                            field.onChange(val?.value ?? '')
                        }}
                        isClearable={isClearable}
                    />
                )}
            />
            {isError && <LabelValidator text={errorMessage} />}
        </div>
    )
}

export default FormSelect