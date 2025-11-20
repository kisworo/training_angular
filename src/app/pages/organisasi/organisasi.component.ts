import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Organisasi, OrganisasiAlamat } from '../../models/organisasi.model';
import { OrganisasiService } from '../../services/organisasi.service';

@Component({
  selector: 'app-organisasi',
  imports: [CommonModule],
  templateUrl: './organisasi.component.html',
  styleUrl: './organisasi.component.scss',
})

export class OrganisasiComponent {
  organisasiList: Organisasi[] = [];
  organisasiKeterangan: string = '';
  organisasiAlamatList: OrganisasiAlamat[] = [];

  constructor(private organisasiService: OrganisasiService) { }

  ngOnInit() {
    this.organisasiService.organisasi$.subscribe((data: Organisasi[]) => {
      this.organisasiList = data;
    });

    this.organisasiService.organisasiKeterangan$.subscribe((data: string) => {
      this.organisasiKeterangan = data;
    });

    this.organisasiService.organisasiAlamatList$.subscribe((data: OrganisasiAlamat[]) => {
      this.organisasiAlamatList = data;
    });
  }
}
