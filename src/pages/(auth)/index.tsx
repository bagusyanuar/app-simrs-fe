import { LuMail, LuLogIn } from 'react-icons/lu'
import { TextField } from '@/components/ui/textfield'
import { PasswordField } from '@/components/ui/passwordfield'
import { LabelValidator } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { ImageBrand } from '@/components/ui/image'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type TLoginSchema } from '@/schemas/auth/login.schema'


export default function LoginPage() {

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
    }

    return (
        <section className="w-full h-full flex items-center justify-center bg-teal-500">
            <div className="bg-white w-80 h-100 drop-shadow-xl rounded-lg py-6 px-10 flex flex-col justify-between items-center">
                <div className="w-full flex flex-col items-center justify-center">
                    <ImageBrand />
                    <span className="text-md font-semibold text-teal-500">{`SIMRS ${import.meta.env.VITE_RS_NAME || ""}`}</span>
                </div>
                <div className='w-full flex flex-col items-center'>
                    <span className="text-sm font-semibold text-neutral-700 mb-3">Log in to your account</span>
                    <div className='w-full mb-1.5'>
                        <TextField
                            placeholder='Email'
                            prefixIcon={<LuMail size={14} />}
                            isError={!!errors.email}
                            {...register('email')}
                        />
                        {errors.email && <LabelValidator text={errors.email.message} />}
                    </div>
                    <div className='w-full mb-3'>
                        <PasswordField
                            placeholder='Password'
                            isError={!!errors.password}
                            {...register('password')}
                        />
                        {errors.password && <LabelValidator text={errors.password.message} />}
                    </div>
                    <Button
                        className='w-full mb-1' variant='fill'
                        onClick={handleSubmit(onSubmit)}
                        onProcess={isSubmitted}
                    >
                        <LuLogIn size={14} />
                        <span>Log in</span>
                    </Button>
                    <Link
                        to="/forgot-password"
                        className='text-xs text-teal-500 hover:underline transition-all duration-300 ease-in-out'
                    >
                        <span>Forgot Password?</span>
                    </Link>

                </div>
                <div className="text-xs text-neutral-500">
                    <span>&copy; copyright 2025</span>
                </div>
            </div>
        </section>
    )
}