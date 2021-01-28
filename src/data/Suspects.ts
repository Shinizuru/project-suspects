export interface Suspect{
    id: number
    name: string
	gender: string
	address: string
	nik: number
	no_kk: number
	mo: string
	riwayat: string
	photo: string
	res_id: number
	wlyh_id: number
}

const suspects: Suspect[] = [
    {
        id: 1,
        name: 'Tandang',
        gender: 'L',
        address: 'Jl. Kebo Sayur No. 12',
        nik: 2425122512425,
        no_kk: 3301234124124234,
        mo: 'Sindikat',
        riwayat: 'Leader Sindikat Perusak Maket Tahun 2013',
        photo: '/img/',
        res_id: 1,
        wlyh_id: 1
    },
    {
        id: 2,
        name: 'Murnanda',
        gender: 'L',
        address: 'Jl. pinggir Rel No. 123',
        nik: 2425122512225,
        no_kk: 3301234124124234,
        mo: 'Sindikat',
        riwayat: 'Begal Sepetu',
        photo: '/img/',
        res_id: 1,
        wlyh_id: 1
    },
    {
        id: 3,
        name: 'Fiki',
        gender: 'L',
        address: 'Jl. Kebo Sayur No. 12',
        nik: 2425122512425,
        no_kk: 3301234124124234,
        mo: 'Sindikat',
        riwayat: 'Perusak Maket Tahun 2013',
        photo: '/img/',
        res_id: 1,
        wlyh_id: 1
    },
    {
        id: 4,
        name: 'Bakat',
        gender: 'L',
        address: 'Jl. Kebo Sayur No. 12',
        nik: 2425122512425,
        no_kk: 3301234124124234,
        mo: 'Sindikat',
        riwayat: 'Perusak Maket Tahun 2013',
        photo: '/img/',
        res_id: 1,
        wlyh_id: 1
    },

]

export const getSuspects = () => suspects;
export const getSuspectsById = (id: number) => suspects.find(s => s.id === id);
export const filterSuspects = (text: string) => suspects.filter(s => {
    return(s.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
})