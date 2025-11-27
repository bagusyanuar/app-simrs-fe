import { z } from 'zod'

export const jobPositionSchema = z.object({
    code: z.string()
        .min(1, 'kolom kode wajib di isi'),
    name: z.string()
        .min(1, 'kolom nama wajib di isi'),
    description: z.string(),
    isMedical: z.boolean('medical staff wajib di pilih')
})

export type TJobPositionSchema = z.infer<typeof jobPositionSchema>

