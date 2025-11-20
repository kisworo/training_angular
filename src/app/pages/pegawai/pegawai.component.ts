// pegawai.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PegawaiService } from '../../services/pegawai.service';
import { AuthService } from '../../services/auth.service';
import { Pegawai } from '../../models/pegawai.model';

@Component({
  selector: 'app-pegawai',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pegawai.component.html',
  styleUrl: './pegawai.component.scss'
})


export class PegawaiComponent implements OnInit {
  pegawaiList: Pegawai[] = [];
  showForm = false;
  isEditing = false;
  isAdmin = false; // Role-based access control
  formError = ''; // Error message untuk validasi
  pegawaiForm: Pegawai = this.getEmptyForm();

  constructor(
    private pegawaiService: PegawaiService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // Subscribe to pegawai data
    this.pegawaiService.pegawai$.subscribe(data => {
      this.pegawaiList = data;
    });

    // Check if user is admin
    this.authService.currentUser$.subscribe(user => {
      this.isAdmin = user?.role === 'admin';
    });
  }

  getEmptyForm(): Pegawai {
    return {
      id: null,
      nama: '',
      email: '',
      posisi: '',
      status: 'Aktif'
    };
  }

  openForm() {
    this.showForm = true;
    this.isEditing = false;
    this.pegawaiForm = this.getEmptyForm();
  }

  editPegawai(pegawai: Pegawai) {
    this.showForm = true;
    this.isEditing = true;
    this.pegawaiForm = { ...pegawai };
  }

  savePegawai() {
    this.formError = ''; // Reset error message

    // Validasi required fields
    if (!this.pegawaiForm.nama || !this.pegawaiForm.nama.trim()) {
      this.formError = 'Nama wajib diisi!';
      return;
    }
    if (!this.pegawaiForm.email || !this.pegawaiForm.email.trim()) {
      this.formError = 'Email wajib diisi!';
      return;
    }
    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.pegawaiForm.email)) {
      this.formError = 'Format email tidak valid!';
      return;
    }
    if (!this.pegawaiForm.posisi || !this.pegawaiForm.posisi.trim()) {
      this.formError = 'Posisi wajib diisi!';
      return;
    }

    if (this.isEditing) {
      this.pegawaiService.updatePegawai(this.pegawaiForm);
    } else {
      this.pegawaiService.addPegawai(this.pegawaiForm);
    }
    this.closeForm();
  }

  deletePegawai(id: number | null) {
    if (id && confirm('Yakin ingin menghapus data ini?')) {
      this.pegawaiService.deletePegawai(id);
    }
  }

  closeForm() {
    this.showForm = false;
    this.pegawaiForm = this.getEmptyForm();
    this.formError = '';
  }
}