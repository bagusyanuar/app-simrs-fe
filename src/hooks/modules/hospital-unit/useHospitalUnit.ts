import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    hospitalUnitSchema,
    type THospitalUnitSchema
} from '@/schemas/hospital-unit/hospital-unit.schema'

const useHospitalUnit = () => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    const {
        handleSubmit,
        control: formControl,
        register,
        formState:
        {
            errors
        },
        reset
    } = useForm<THospitalUnitSchema>({
        resolver: zodResolver(hospitalUnitSchema),
        mode: 'onSubmit',
        shouldFocusError: false,
        defaultValues: {
            code: '',
            name: '',
            description: '',
            installationId: '',
        }
    })

    const onSubmit = async (data: THospitalUnitSchema) => {
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

export default useHospitalUnit