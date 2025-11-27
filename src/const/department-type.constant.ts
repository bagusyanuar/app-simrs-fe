type TDepartmentTypeOptions = {
    value: string
    label: string
}

export const DEPARTMENT_TYPE_OPTIONS = [
    {
        value: "service",
        label: "Pelayanan"
    },
    {
        value: "support",
        label: "Penunjang"
    },
    {
        value: "management",
        label: "Manajemen"
    }
] as const satisfies readonly TDepartmentTypeOptions[];

export const DEPARTMENT_TYPE_ENUM = DEPARTMENT_TYPE_OPTIONS.map(item => item.value) as unknown as readonly string[];

export type TDepartmentType = typeof DEPARTMENT_TYPE_ENUM[number];