import { PageTitle, CardTitle } from '@/components/ui/typography'
import { Card, FlexBox } from '@/components/ui/container'
import { LuCirclePlus } from 'react-icons/lu'
import { BiBuilding } from 'react-icons/bi'
import { Button } from '@/components/ui/button'
import { Table, TableSearch, type TColumn } from '@/components/ui/table'
import { ModalForm, ModalConfirmation } from '@/components/ui/modal'
import { useHospitalUnit } from '@/hooks/modules/hospital-unit'
import { FormText, FormTextArea, FormSelect } from '@/components/ui/form'


type THospitalUnit = {
    id: string
    installation: string
    code: string
    name: string
    description: string
}

export default function HospitalUnitPage() {

    const {
        formControl,
        errors,
        submitConfirmation,
        isSubmitted,
        isConfirmation,
        showConfirmation,
        closeConfirmation,
        isModalOpen,
        showModal,
        closeModal,
    } = useHospitalUnit()

    const columns: TColumn<THospitalUnit>[] = [
        {
            key: 'id',
            text: 'Code',
            cell: (row) => row.code,
            align: 'justify-center',
            cellClassName: 'align-top',
            width: 'min-w-32 w-32'
        },
        {
            key: 'installation',
            text: 'Instalasi',
            cell: (row) => row.installation,
            align: 'justify-center',
            cellClassName: 'align-top',
            width: 'min-w-40 w-40'
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
    ]

    const data: THospitalUnit[] = [
        {
            id: 'ADM',
            installation: 'Rawat Inap',
            code: 'RJ',
            name: 'Rawat Jalan',
            description: 'desc',
        },
        {
            id: 'ADM',
            installation: 'Rawat Jalan',
            code: 'RI',
            name: 'Rawat Inap',
            description: 'desc',
        },
        {
            id: 'RAD',
            installation: 'Rawat Jalan',
            code: 'RAD',
            name: 'Radiologi',
            description: 'desc',
        },
    ]

    return (
        <div>
            <PageTitle
                title='Unit Rumah Sakit'
                subTitle='Halaman ini digunakan untuk mengelola seluruh data unit yang ada di rumah sakit'
            />
            <Card>
                <FlexBox className='justify-between mb-5'>
                    <CardTitle title='Data Instalasi Rumah Sakit' icon={BiBuilding} />
                    <FlexBox className='gap-1.5'>
                        <TableSearch />
                        <Button
                            icon={LuCirclePlus}
                            onClick={showModal}
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
                show={isModalOpen}
                className='w-100'
                onClose={closeModal}
                onSubmit={showConfirmation}
                onProcess={isSubmitted}
                title='Form Unit Rumah Sakit'
            >
                <FormSelect
                    control={formControl}
                    name='installationId'
                    options={[
                        {
                            value: 'acb325b0-873e-4f8d-9031-d478efb0ca25',
                            label: 'Instalasi Rawat Jalan'
                        },
                        {
                            value: '71153094-8ec1-4c08-918e-09e09257d2ef',
                            label: 'Instalasi Rawat Inap'
                        },
                        {
                            value: '18f79b88-6cf1-4636-b274-1b4119c28d2d',
                            label: 'Instalasi Penunjang Medis'
                        },
                    ]}
                    label='Instalasi'
                    placeholder='pilih instalasi'
                    className='mb-2'
                    isError={!!errors.installationId}
                    errorMessage={errors.installationId?.message}
                    isClearable
                    disabled={isSubmitted}
                />
                <FormText
                    control={formControl}
                    name='code'
                    label='Kode'
                    className='mb-2'
                    placeholder='kode'
                    isError={!!errors.code}
                    errorMessage={errors.code?.message}
                    disabled={isSubmitted}
                />
                <FormText
                    control={formControl}
                    name='name'
                    label='Nama'
                    className='mb-2'
                    placeholder='nama'
                    isError={!!errors.name}
                    errorMessage={errors.name?.message}
                    disabled={isSubmitted}
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
                    disabled={isSubmitted}
                />
            </ModalForm>
            <ModalConfirmation
                show={isConfirmation}
                title='KONFIRMASI PENAMBAHAN UNIT'
                description='Anda akan menambahkan unit rumah sakit baru, pastikan data yang sudah ada input sudah benar!'
                onClose={closeConfirmation}
                onSubmit={submitConfirmation}
            />
        </div>
    )
}