import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    hospitalInstallationSchema,
    type THospitalInstallationSchema
} from '@/schemas/installation/installation.schema'

const useHospitalInstallation = () => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    const {
        handleSubmit,
        register,
        formState:
        {
            errors
        },
        reset
    } = useForm<THospitalInstallationSchema>({
        resolver: zodResolver(hospitalInstallationSchema),
        mode: 'onSubmit',
        shouldFocusError: false,
        defaultValues: {
            code: '',
            name: '',
            description: '',
            type: '',
        }
    })

    const onSubmit = async (data: THospitalInstallationSchema) => {
        setIsSubmitted(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log(data);
        setIsSubmitted(false)
        reset()
    }

    return {
        handleSubmit,
        onSubmit,
        isSubmitted,
        register,
        errors,
        reset
    }
}

export default useHospitalInstallation