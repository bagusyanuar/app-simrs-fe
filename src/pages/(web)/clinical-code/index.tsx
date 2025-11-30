import { PageTitle, CardTitle } from '@/components/ui/typography'
import { Card, FlexBox } from '@/components/ui/container'
import { NavTab } from '@/components/ui/tab'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { TbMedicalCross } from 'react-icons/tb'
import { LuCirclePlus, LuStethoscope } from 'react-icons/lu'
import { Button } from '@/components/ui/button'
import { Table, TableSearch, type TColumn } from '@/components/ui/table'
import { match } from 'ts-pattern'

type TClinicalCode = {
    id: string
    code: string
    title: string
    description: string
}

export default function ClinicalCodePage() {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState<string>(() => {
        const hash = window.location.hash.replace('#', '');
        return hash; // ganti defaultTab sesuai kebutuhan
    })

    const goToTab = (hash: string) => {
        setActiveTab(hash)
        if (hash === '') {
            navigate(window.location.pathname, { replace: true })
            return
        }
        navigate(`#${hash}`)
    }

    const columns: TColumn<TClinicalCode>[] = [
        {
            key: 'code',
            text: 'Code',
            cell: (row) => row.code,
            align: 'justify-center',
            cellClassName: 'align-top',
            width: 'min-w-32 w-32'
        },
        {
            key: 'title',
            text: 'Title',
            cell: (row) => row.title,
            align: 'justify-start',
            cellClassName: 'align-top',
            width: 'min-w-40'
        },
    ]

    const data: TClinicalCode[] = [
        {
            id: 'A.001',
            code: 'A.001',
            title: 'Cholera due to Vibrio cholerae 01, biovar cholerae',
            description: 'Cholera due to Vibrio cholerae 01, biovar cholerae',
        },
        {
            id: 'I10',
            code: 'I10',
            title: 'Essential (primary) hypertension',
            description: 'Essential (primary) hypertension',
        },
        {
            id: '03.99',
            code: '03.99',
            title: 'Other incision of spinal canal',
            description: 'Other incision of spinal canal',
        },
    ]

    return (
        <div>
            <PageTitle
                title='Kode Klinis ICD'
                subTitle='Halaman ini digunakan untuk mengelola seluruh data kode klinis Tindakan (ICD9) dan Diagnosa (ICD10)'
            />
            <NavTab
                className='mb-3'
                tabs={[
                    {
                        text: 'Diagnosa (ICD10)',
                        isActive: activeTab === '' ? true : false,
                        onClick: () => goToTab('')
                    },
                    {
                        text: 'Tindakan (ICD9)',
                        isActive: activeTab === 'icd9' ? true : false,
                        onClick: () => goToTab('icd9')
                    }
                ]}
            />
            {
                match(activeTab)
                    .with("", () => {
                        return <Card>
                            <FlexBox className='justify-between mb-5'>
                                <CardTitle title='Data Diagnosa (ICD10)' icon={TbMedicalCross} />
                                <FlexBox className='gap-1.5'>
                                    <TableSearch />
                                    <Button
                                        icon={LuCirclePlus}
                                        onClick={() => { }}
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
                    })
                    .with("icd9", () => {
                        return <Card>
                            <FlexBox className='justify-between mb-5'>
                                <CardTitle title='Data Tindakan (ICD9)' icon={LuStethoscope} />
                                <FlexBox className='gap-1.5'>
                                    <TableSearch />
                                    <Button
                                        icon={LuCirclePlus}
                                        onClick={() => { }}
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
                    })
                    .otherwise(() => <></>)
            }

        </div>
    )
}