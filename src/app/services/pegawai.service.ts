// pegawai.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { Pegawai } from '../models/pegawai.model';
import { Pegawai } from '../models/pegawai.model';

@Injectable({
    providedIn: 'root'
})
export class PegawaiService {
    private pegawaiSubject = new BehaviorSubject<Pegawai[]>([
        {
            id: 1,
            nama: 'John Doe',
            email: 'john&#64;example.com',
            posisi: 'Manager',
            status: 'Aktif'
        },
        {
            id: 2,
            nama: 'Jane Smith',
            email: 'jane&#64;example.com',
            posisi: 'Developer',
            status: 'Aktif'
        },
        {
            id: 3,
            nama: 'Bob Wilson',
            email: 'bob&#64;example.com',
            posisi: 'Designer',
            status: 'Nonaktif'
        }
    ]);

    public pegawai$: Observable<Pegawai[]> = this.pegawaiSubject.asObservable();

    getPegawai(): Pegawai[] {
        return this.pegawaiSubject.value;
    }

    addPegawai(pegawai: Pegawai) {
        const current = this.pegawaiSubject.value;
        const newId = Math.max(...current.map(p => p.id || 0), 0) + 1;
        this.pegawaiSubject.next([...current, { ...pegawai, id: newId }]);
    }

    updatePegawai(pegawai: Pegawai) {
        const current = this.pegawaiSubject.value;
        const index = current.findIndex(p => p.id === pegawai.id);
        if (index !== -1) {
            current[index] = pegawai;
            this.pegawaiSubject.next([...current]);
        }
    }

    deletePegawai(id: number) {
        const current = this.pegawaiSubject.value;
        this.pegawaiSubject.next(current.filter(p => p.id !== id));
    }
}