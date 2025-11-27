import { PageTitle, CardTitle } from '@/components/ui/typography'
import { Card, FlexBox } from '@/components/ui/container'
import { LuCirclePlus } from 'react-icons/lu'
import { BiBuilding } from 'react-icons/bi'
import { Button } from '@/components/ui/button'
import { Table, TableSearch, type TColumn } from '@/components/ui/table'
import { useState } from 'react'
import { ModalForm } from '@/components/ui/modal'
import { TextField, TextAreaField } from '@/components/ui/textfield'
import { LabelForm, LabelValidator } from '@/components/ui/label'
import { useHospitalInstallation } from '@/hooks/modules/installation'
import { DEPARTMENT_TYPE_OPTIONS } from '@/const/department-type.constant'
import { ReactSelect } from '@/components/ui/select'

type THospitalInstallation = {
    id: string
    code: string
    name: string
    description: string
    type: string
}

export default function InstallationPage() {
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const {
        register,
        errors,
        onSubmit,
        handleSubmit,
        isSubmitted,
        reset
    } = useHospitalInstallation()

    const columns: TColumn<THospitalInstallation>[] = [
        {
            key: 'id',
            text: 'Code',
            cell: (row) => row.code,
            align: 'justify-center',
            cellClassName: 'align-top',
            width: 'min-w-32 w-32'
        },
        {
            key: 'name',
            text: 'Name',
            cell: (row) => <div className='flex flex-col'>
                {row.name}
                <span className='text-xs text-neutral-500'>Lorem ipsum dolor sit amet !</span>
            </div>,
            width: 'min-w-72'
        },
        {
            key: 'type',
            text: 'Tipe',
            cell: (row) => row.type,
            align: 'justify-center',
            width: 'min-w-40 w-40'
        },
    ]

    const data: THospitalInstallation[] = [
        {
            id: 'ADM',
            code: 'RJ',
            name: 'Rawat Jalan',
            description: 'desc',
            type: 'service'
        },
        {
            id: 'ADM',
            code: 'RI',
            name: 'Rawat Inap',
            description: 'desc',
            type: 'service'
        },
        {
            id: 'RAD',
            code: 'RAD',
            name: 'Radiologi',
            description: 'desc',
            type: 'support'
        },
    ]

    return (
        <div>
            <PageTitle
                title='Instalasi Rumah Sakit'
                subTitle='Halaman ini digunakan untuk mengelola seluruh data instalasi yang ada di rumah sakit'
            />
            <Card>
                <FlexBox className='justify-between mb-5'>
                    <CardTitle title='Data Instalasi Rumah Sakit' icon={BiBuilding} />
                    <FlexBox className='gap-1.5'>
                        <TableSearch />
                        <Button
                            icon={LuCirclePlus}
                            onClick={() => setModalOpen(true)}
                        >
                            <span>Create</span>
                        </Button>
                    </FlexBox>
                </FlexBox>
                <Table
                    columns={columns}
                    data={data}
                    totalRows={0}
                    currentPage={0}
                />
            </Card>
            <ModalForm
                show={modalOpen}
                className='w-100'
                onClose={() => {
                    setModalOpen(false)
                    reset()
                }}
                onSubmit={handleSubmit(onSubmit)}
                onProcess={isSubmitted}
                title='Form Instalasi Rumah Sakit'
            >
                <div className='w-full mb-1.5'>
                    <LabelForm text='Kode' />
                    <TextField
                        placeholder='kode'
                        isError={!!errors.code}
                        {...register('code')}
                    />
                    {errors.code && <LabelValidator text={errors.code.message} />}
                </div>
                <div className='w-full mb-1.5'>
                    <LabelForm text='Nama' />
                    <TextField
                        placeholder='nama'
                        isError={!!errors.name}
                        {...register('name')}
                    />
                    {errors.name && <LabelValidator text={errors.name.message} />}
                </div>
                <div className='w-full mb-1.5'>
                    <LabelForm text='Tipe' />
                    <ReactSelect options={DEPARTMENT_TYPE_OPTIONS} />
                    {errors.type && <LabelValidator text={errors.type.message} />}
                </div>
                <div className='w-full mb-2.5'>
                    <LabelForm text='Deskripsi' />
                    <TextAreaField
                        rows={4}
                        placeholder='deskripsi'
                        isError={!!errors.description}
                        {...register('description')}
                    />
                    {errors.description && <LabelValidator text={errors.description.message} />}
                </div>
            </ModalForm>
        </div>
    )
}