import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { jobDepartmentSchema, type TJobDepartmentSchema } from '@/schemas/job-department/job-department.schema'

const useJobDepartment = () => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    const { handleSubmit, register, formState: { errors } } = useForm<TJobDepartmentSchema>({
        resolver: zodResolver(jobDepartmentSchema),
        mode: 'onSubmit',
        shouldFocusError: false,
        defaultValues: {
            code: '',
            name: '',
            isMedical: false
        }
    })

    const onSubmit = async (data: TJobDepartmentSchema) => {
        setIsSubmitted(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log(data);
        setIsSubmitted(false)
    }

    return {
        handleSubmit,
        onSubmit,
        isSubmitted,
        register,
        errors
    }
}

export default useJobDepartment