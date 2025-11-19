import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-pegawai',
  imports: [FormsModule],
  templateUrl: './pegawai.html',
  styleUrl: './pegawai.css',
})
export class Pegawai {

  employees: any[] = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Manager',
      email: 'john@example.com',
      organizationId: 1
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Developer',
      email: 'jane@example.com',
      organizationId: 1
    },
    {
      id: 3,
      name: 'Alice Johnson',
      position: 'Designer',
      email: 'aa@example.com',
      organizationId: 2
    }
  ];

  organizations: any[] = [
    { id: 1, name: 'Batii' },
    { id: 2, name: 'DJA' },
    { id: 3, name: 'DJP' },
    { id: 4, name: 'BC' },
  ];

  employeeForm = {
    id: 0,
    name: '',
    position: '',
    email: '',
    organizationId: 1
  };

  showEmployeeForm: boolean = false;
  isEditingEmployee: boolean = false;

  openEmployeeForm() {
    this.showEmployeeForm = true;
    this.isEditingEmployee = false;
    this.employeeForm = {
      id: 0,
      name: '',
      position: '',
      email: '',
      organizationId: 1
    };
  }

  closeEmployeeForm() {
    this.showEmployeeForm = false;
  }

  getOrganizationName(organizationId: any) {
    const org = this.organizations.find((o) => o.id === organizationId);
    return org ? org.name : 'N/A';
  }

  editEmployee(employee: any) {
    this.showEmployeeForm = true;
    this.isEditingEmployee = true;
    this.employeeForm = { ...employee };
  }

  deleteEmployee(id: number) {
    if (confirm('Apakah Anda yakin ingin menghapus pegawai ini?')) {
      this.employees = this.employees.filter(emp => emp.id !== id);
    }
  }

  saveEmployee() {
    if (!this.employeeForm.name || !this.employeeForm.email) {
      alert('Nama dan Email harus diisi!');
      return;
    }

    if (this.isEditingEmployee) {
      const index = this.employees.findIndex(emp => emp.id === this.employeeForm.id);
      if (index > -1) {
        this.employees[index] = { ...this.employeeForm };
      }
    } else {
      this.employeeForm.id = Math.max(...this.employees.map(e => e.id), 0) + 1;
      this.employees.push({ ...this.employeeForm });
    }

    this.closeEmployeeForm();
  }
}
