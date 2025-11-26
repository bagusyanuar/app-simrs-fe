import { PageTitle, CardTitle } from '@/components/ui/typography'
import { Card, FlexBox } from '@/components/ui/container'
import { LuNetwork, LuCirclePlus, LuCircleCheck } from 'react-icons/lu'
import { Button } from '@/components/ui/button'
import { Table, TableSearch, type TColumn } from '@/components/ui/table'

type TJobDepartment = {
    id: string,
    name: string
}
export default function JobDepartmentPage() {

    const columns: TColumn<TJobDepartment>[] = [
        {
            key: 'id',
            text: 'Code',
            cell: (row) => row.id,
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
        {
            key: 'medical',
            text: 'Medical',
            cell: () => <LuCircleCheck size={14} className='text-teal-500' />,
            align: 'justify-center',
            width: 'min-w-40 w-40'
        },
    ]

    const data: TJobDepartment[] = [
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
                title='Unit Kerja'
                subTitle='Halaman ini digunakan untuk mengelola seluruh data unit kerja yang ada di rumah sakit'
            />
            <Card>
                <FlexBox className='justify-between mb-3'>
                    <CardTitle title='Data Unit Kerja' icon={LuNetwork} />
                    <FlexBox className='gap-1.5'>
                        <TableSearch />
                        <Button
                            icon={LuCirclePlus}
                        >
                            <span>Create</span>
                        </Button>
                    </FlexBox>
                </FlexBox>
                <Table
                    columns={columns}
                    data={data}
                />
            </Card>
        </div>
    )
}