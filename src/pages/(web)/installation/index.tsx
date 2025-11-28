import { PageTitle, CardTitle } from '@/components/ui/typography'
import { Card, FlexBox } from '@/components/ui/container'
import { LuCirclePlus } from 'react-icons/lu'
import { BiBuilding } from 'react-icons/bi'
import { Button } from '@/components/ui/button'
import { Table, TableSearch, type TColumn } from '@/components/ui/table'
import { useState } from 'react'
import { ModalForm } from '@/components/ui/modal'
import { useHospitalInstallation } from '@/hooks/modules/installation'
import { DEPARTMENT_TYPE_OPTIONS } from '@/const/department-type.constant'
import { FormText, FormTextArea, FormSelect } from '@/components/ui/form'

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
        formControl,
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
                <FormText
                    control={formControl}
                    name='code'
                    label='Kode'
                    className='mb-2'
                    placeholder='kode'
                    isError={!!errors.code}
                    errorMessage={errors.code?.message}
                />
                <FormText
                    control={formControl}
                    name='name'
                    label='Nama'
                    className='mb-2'
                    placeholder='nama'
                    isError={!!errors.name}
                    errorMessage={errors.name?.message}
                />
                <FormSelect
                    control={formControl}
                    name='type'
                    options={DEPARTMENT_TYPE_OPTIONS}
                    label='Tipe Instalasi'
                    placeholder='pilih tipe instalasi'
                    className='mb-2'
                    isError={!!errors.type}
                    errorMessage={errors.type?.message}
                    isClearable
                />
                <FormTextArea
                    control={formControl}
                    rows={4}
                    name='description'
                    label='Deskripsi'
                    className='mb-2'
                    placeholder='deskripsi'
                    isError={!!errors.description}
                    errorMessage={errors.description?.message}
                />
            </ModalForm>
        </div>
    )
}