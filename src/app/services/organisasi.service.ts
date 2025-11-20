
// organisasi.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Organisasi, OrganisasiAlamat } from '../models/organisasi.model';

@Injectable({
    providedIn: 'root'
})
export class OrganisasiService {


    private organisasiSubject = new BehaviorSubject<Organisasi[]>([
        {
            id: 1,
            nama: 'IT Department',
            tipe: 'Department',
            deskripsi: 'Departemen Teknologi Informasi',
            jumlahAnggota: 15
        },
        {
            id: 2,
            nama: 'HR Department',
            tipe: 'Department',
            deskripsi: 'Departemen Sumber Daya Manusia',
            jumlahAnggota: 8
        }
    ]);



    private organisasiKeteranganSubject = new BehaviorSubject<string>(
        "Badan Teknologi Informasi dan Intelejen Keuangan"
    );

    private organisasiAlamatSubject = new BehaviorSubject<OrganisasiAlamat[]>([
        {
            no: 1,
            alamat: 'Jl. Jend. Sudirman No. 1',
            telp: '021-1234567',
            email: 'it@company.com'
        },
        {
            no: 2,
            alamat: 'Jl. Gatot Subroto No. 5',
            telp: '021-7654321',
            email: 'hr@company.com'
        }
    ]);

    public organisasi$: Observable<Organisasi[]> = this.organisasiSubject.asObservable();

    public organisasiKeterangan$: Observable<string> = this.organisasiKeteranganSubject.asObservable();

    public organisasiAlamatList$: Observable<OrganisasiAlamat[]> = this.organisasiAlamatSubject.asObservable();

    getOrganisasi(): Organisasi[] {
        return this.organisasiSubject.value;
    }

    addOrganisasi(org: Organisasi) {
        const current = this.organisasiSubject.value;
        const newId = Math.max(...current.map(o => o.id || 0), 0) + 1;
        this.organisasiSubject.next([...current, { ...org, id: newId }]);
    }

    updateOrganisasi(org: Organisasi) {
        const current = this.organisasiSubject.value;
        const index = current.findIndex(o => o.id === org.id);
        if (index !== -1) {
            current[index] = org;
            this.organisasiSubject.next([...current]);
        }
    }

    deleteOrganisasi(id: number) {
        const current = this.organisasiSubject.value;
        this.organisasiSubject.next(current.filter(o => o.id !== id));
    }
}