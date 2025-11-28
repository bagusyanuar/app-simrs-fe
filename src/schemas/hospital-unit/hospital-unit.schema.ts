import { z } from 'zod'

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export const hospitalUnitSchema = z.object({
    code: z.string()
        .min(1, 'kolom kode wajib di isi'),
    installationId: z.string()
        .min(1, 'kolom instalasi wajib di isi')
        .regex(uuidRegex, 'format id tidak valid'),
    name: z.string()
        .min(1, 'kolom nama wajib di isi'),
    description: z.string(),
})

export type THospitalUnitSchema = z.infer<typeof hospitalUnitSchema>

