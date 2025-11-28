import { twMerge } from 'tailwind-merge'
import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form'
import { Switch } from '@/components/ui/switch'
import { LabelForm, LabelValidator } from '@/components/ui/label'

interface IProps<T extends FieldValues> {
    control: Control<T>
    name: Path<T>
    className?: string
    isError?: boolean
    errorMessage?: string
    disabled?: boolean
    label?: string
    switchLabel?: string
}


const FormSwitch = <T extends FieldValues,>({
    control,
    name,
    label = '',
    className = '',
    isError = false,
    errorMessage = '',
    disabled = false,
    switchLabel = ''
}: IProps<T>) => {
    return (
        <div className={twMerge(
            'w-full',
            className
        )}>
            {label !== '' && <LabelForm text={label} className='mb-1.5' />}
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <div className='flex items-center gap-1.5'>
                        <Switch
                            {...field}
                            disabled={disabled}
                            isError={isError}
                            checked={field.value}
                            onChange={e => field.onChange(e.target.checked)}
                        />
                        {switchLabel !== '' && <LabelForm text={switchLabel} className='mb-0 font-normal' />}
                    </div>
                )}
            />
            {isError && <LabelValidator text={errorMessage} />}
        </div>
    )
}

export default FormSwitch