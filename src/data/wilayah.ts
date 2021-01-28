export interface Wilayah {
    namaWilayah: string
    id: number
}

interface SearchFunc {
    (source: string, subString: string): boolean;
}

var wilayahCilacap: Array<Wilayah> = [
    {
        namaWilayah: 'Cilacap Utara',
        id: 1
    },
    {
        namaWilayah: 'Cilacap Tengah',
        id: 2
    },
    {
        namaWilayah: 'Cilacap Selatan',
        id: 3
    },
]


export const getWilayahCilacap = () => wilayahCilacap;

export const filterWilayah = (text: string) => wilayahCilacap.filter(w => {

    return(w.namaWilayah.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
    
})

export const getWilayah = (id: number) => wilayahCilacap.find(w => w.id === id);