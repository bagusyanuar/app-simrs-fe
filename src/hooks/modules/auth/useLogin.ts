import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type TLoginSchema } from '@/schemas/auth/login.schema'
import { useNavigate } from 'react-router'
import { ROUTE } from '@/const/route'

const useLogin = () => {

    const navigate = useNavigate()
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    const { handleSubmit, register, formState: { errors } } = useForm<TLoginSchema>({
        resolver: zodResolver(loginSchema),
        mode: 'onSubmit',
        shouldFocusError: false,
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = async (data: TLoginSchema) => {
        setIsSubmitted(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log(data);
        setIsSubmitted(false)
        navigate(ROUTE.dashboard)
    }

    return {
        handleSubmit,
        onSubmit,
        isSubmitted,
        register,
        errors
    }
}

export default useLogin