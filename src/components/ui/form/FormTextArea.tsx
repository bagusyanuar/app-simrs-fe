import { twMerge } from 'tailwind-merge'
import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form'
import { TextAreaField } from '@/components/ui/textfield'
import { LabelForm, LabelValidator } from '@/components/ui/label'

interface IProps<T extends FieldValues> {
    control: Control<T>
    name: Path<T>
    className?: string
    isError?: boolean
    errorMessage?: string
    placeholder?: string
    disabled?: boolean
    label?: string
    rows?: number
}

const FormTextArea = <T extends FieldValues,>({
    control,
    name,
    label = '',
    className = '',
    isError = false,
    errorMessage = '',
    placeholder = '',
    disabled = false,
    rows = 3,
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
                    <TextAreaField
                        {...field}
                        rows={rows}
                        placeholder={placeholder}
                        disabled={disabled}
                        isError={isError}
                    />
                )}
            />
            {isError && <LabelValidator text={errorMessage} />}
        </div>
    )
}

export default FormTextArea