import { LuMail, LuLogIn } from 'react-icons/lu'
import { TextField } from '@/components/ui/textfield'
import { PasswordField } from '@/components/ui/passwordfield'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    return (
        <section className="w-full h-full flex items-center justify-center bg-teal-500">
            <div className="bg-white w-80 h-100 drop-shadow-xl rounded-lg py-6 px-10 flex flex-col justify-between items-center">
                <div className="w-full flex flex-col items-center justify-center">
                    <img src='/static/images/logo.png' className='h-16 w-fit mb-1' />
                    <span className="text-md font-semibold text-teal-500">{`SIMRS ${import.meta.env.VITE_RS_NAME || ""}`}</span>

                </div>
                <div className='w-full flex flex-col items-center'>
                    <span className="text-sm font-semibold text-neutral-700 mb-3">Log in to your account</span>
                    <div className='w-full mb-1.5'>
                        <TextField
                            placeholder='Email'
                            prefixIcon={<LuMail size={14} />}
                            suffixIcon={<LuMail size={14} />}
                        />
                        {/* <LabelValidator text='email is required' /> */}
                    </div>
                    <div className='w-full mb-3'>
                        <PasswordField placeholder='Password' />
                        {/* <LabelValidator text='password is required' /> */}
                    </div>
                    <Button className='w-full mb-1' variant='fill'>
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