import { PageTitle, CardTitle } from '@/components/ui/typography'
import { Card, FlexBox } from '@/components/ui/container'
import { LuCirclePlus, LuCircleCheck } from 'react-icons/lu'
import { LiaUserTagSolid } from 'react-icons/lia'
import { Button } from '@/components/ui/button'
import { Table, TableSearch, type TColumn } from '@/components/ui/table'
import { useState } from 'react'
import { ModalForm } from '@/components/ui/modal'
import { useJobPosition } from '@/hooks/modules/job-position'
import { FormText, FormTextArea, FormSwitch } from '@/components/ui/form'

type TJobPosition = {
    id: string,
    name: string
}
export default function JobPositionPage() {
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const {
        formControl,
        errors,
        onSubmit,
        handleSubmit,
        isSubmitted,
        reset
    } = useJobPosition()

    const columns: TColumn<TJobPosition>[] = [
        {
            key: 'id',
            text: 'Code',
            cell: (row) => row.id,
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
            key: 'medical',
            text: 'Bagian Medis',
            cell: () => <LuCircleCheck size={14} className='text-teal-500' />,
            align: 'justify-center',
            width: 'min-w-40 w-40'
        },
    ]

    const data: TJobPosition[] = [
        {
            id: 'ADM',
            name: 'Administrasi'
        },
        {
            id: 'KEU',
            name: 'Keuangan'
        },
        {
            id: 'RAD',
            name: 'Radiologi'
        },
    ]

    return (
        <div>
            <PageTitle
                title='Jabatan Kerja'
                subTitle='Halaman ini digunakan untuk mengelola seluruh data jabatan kerja yang ada di rumah sakit'
            />
            <Card>
                <FlexBox className='justify-between mb-5'>
                    <CardTitle title='Data Jabatan Kerja' icon={LiaUserTagSolid} />
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
                title='Form Jabatan Kerja'
            >
                <FormText
                    control={formControl}
                    name='code'
                    label='Kode'
                    className='mb-2'
                    placeholder='kode'
                    disabled={isSubmitted}
                    isError={!!errors.code}
                    errorMessage={errors.code?.message}
                />
                <FormText
                    control={formControl}
                    name='name'
                    label='Nama'
                    className='mb-2'
                    placeholder='nama'
                    disabled={isSubmitted}
                    isError={!!errors.name}
                    errorMessage={errors.name?.message}
                />
                <FormTextArea
                    control={formControl}
                    rows={4}
                    name='description'
                    label='Deskripsi'
                    className='mb-2'
                    placeholder='deskripsi'
                    disabled={isSubmitted}
                    isError={!!errors.description}
                    errorMessage={errors.description?.message}
                />
                <FormSwitch
                    control={formControl}
                    name='isMedical'
                    label='Staff Medis'
                    switchLabel='Apakah pekerjaan ini berhubungan dengan medis?'
                    className='mb-2'
                    disabled={isSubmitted}
                    isError={!!errors.isMedical}
                    errorMessage={errors.isMedical?.message}
                />
            </ModalForm>
        </div>
    )
}