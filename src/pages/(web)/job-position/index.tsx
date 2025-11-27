import { PageTitle, CardTitle } from '@/components/ui/typography'
import { Card, FlexBox } from '@/components/ui/container'
import { LuCirclePlus, LuCircleCheck } from 'react-icons/lu'
import { LiaUserTagSolid } from 'react-icons/lia'
import { Button } from '@/components/ui/button'
import { Table, TableSearch, type TColumn } from '@/components/ui/table'
import { useState } from 'react'
import { ModalForm } from '@/components/ui/modal'
import { TextField, TextAreaField } from '@/components/ui/textfield'
import { LabelForm, LabelValidator } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { useJobPosition } from '@/hooks/modules/job-position'

type TJobPosition = {
    id: string,
    name: string
}
export default function JobPositionPage() {
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const {
        register,
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
                <div className='w-full mb-3'>
                    <LabelForm text='Medical Staff' className='mb-2' />
                    <div className='flex items-center gap-1.5'>
                        <Switch
                            {...register('isMedical')}
                        />
                        <LabelForm text='Apakah jabatan ini berhubungan dengan medis?' className='mb-0 font-normal' />
                    </div>
                    {errors.isMedical && <LabelValidator text={errors.isMedical.message} />}
                </div>
            </ModalForm>
        </div>
    )
}