import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { jobPositionSchema, type TJobPositionSchema } from '@/schemas/job-position/job-position.schema'

const useJobPosition = () => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    const {
        control: formControl,
        handleSubmit,
        register,
        formState:
        {
            errors
        },
        reset
    } = useForm<TJobPositionSchema>({
        resolver: zodResolver(jobPositionSchema),
        mode: 'onSubmit',
        shouldFocusError: false,
        defaultValues: {
            code: '',
            name: '',
            isMedical: false,
            description: ''
        }
    })

    const onSubmit = async (data: TJobPositionSchema) => {
        setIsSubmitted(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log(data);
        setIsSubmitted(false)
        reset()
    }

    return {
        formControl,
        handleSubmit,
        onSubmit,
        isSubmitted,
        register,
        errors,
        reset
    }
}

export default useJobPosition