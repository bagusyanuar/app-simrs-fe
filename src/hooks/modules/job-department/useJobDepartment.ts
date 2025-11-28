import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { jobDepartmentSchema, type TJobDepartmentSchema } from '@/schemas/job-department/job-department.schema'

const useJobDepartment = () => {
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
    } = useForm<TJobDepartmentSchema>({
        resolver: zodResolver(jobDepartmentSchema),
        mode: 'onSubmit',
        shouldFocusError: false,
        defaultValues: {
            code: '',
            name: '',
            isMedical: false,
            description: ''
        }
    })

    const onSubmit = async (data: TJobDepartmentSchema) => {
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

export default useJobDepartment