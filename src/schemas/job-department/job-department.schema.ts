import { z } from 'zod'

export const jobDepartmentSchema = z.object({
    code: z.string()
        .min(1, 'kolom kode wajib di isi'),
    name: z.string()
        .min(1, 'kolom nama wajib di isi'),
    isMedical: z.boolean('medical staff wajib di pilih')
})

export type TJobDepartmentSchema = z.infer<typeof jobDepartmentSchema>

