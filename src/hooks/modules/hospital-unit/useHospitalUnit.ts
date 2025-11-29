import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    hospitalUnitSchema,
    type THospitalUnitSchema
} from '@/schemas/hospital-unit/hospital-unit.schema'
import { toast } from '@/components/ui/toast'

const useHospitalUnit = () => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const [isModalOpen, setModalOpen] = useState<boolean>(false)
    const [isConfirmation, setConfirmation] = useState<boolean>(false)

    const {
        handleSubmit,
        control: formControl,
        register,
        formState:
        {
            errors
        },
        reset,
        trigger
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
        toast.success('successfully create new unit', 5000, () => {
            console.log(data);
            setIsSubmitted(false)
            setModalOpen(false)
            reset()
        })
    }

    const showConfirmation = async () => {
        const isValid = await trigger()
        if (!isValid) {
            return
        }
        setConfirmation(true)
    }

    const closeConfirmation = () => {
        setConfirmation(false)
    }

    const submitConfirmation = () => {
        setConfirmation(false)
        handleSubmit(onSubmit)()
    }

    const showModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
        reset()
    }

    return {
        formControl,
        handleSubmit,
        onSubmit,
        isSubmitted,
        register,
        errors,
        reset,
        showConfirmation,
        closeConfirmation,
        isConfirmation,
        isModalOpen,
        showModal,
        closeModal,
        submitConfirmation
    }
}

export default useHospitalUnit