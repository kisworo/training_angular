// organisasi.model.ts
export interface Organisasi {
    id: number | null;
    nama: string;
    tipe: string;
    deskripsi: string;
    jumlahAnggota: number;
}

export interface OrganisasiAlamat {
    no: number;
    alamat: string;
    telp: string;
    email: string;
}