import { z } from 'zod'
import { DEPARTMENT_TYPE_ENUM, type TDepartmentType } from '@/const/department-type.constant'

export const hospitalInstallationSchema = z.object({
    code: z.string()
        .min(1, 'kolom kode wajib di isi'),
    name: z.string()
        .min(1, 'kolom nama wajib di isi'),
    description: z.string(),
    type: z.string()
        .min(1, "kolom tipe wajib di isi")
        .refine((val) => DEPARTMENT_TYPE_ENUM.includes(val as TDepartmentType), {
            message: "type tidak valid",
        })

})

export type THospitalInstallationSchema = z.infer<typeof hospitalInstallationSchema>

