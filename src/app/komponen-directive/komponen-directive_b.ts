import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
    id: number;
    name: string;
    role: string;
}

@Component({
    selector: 'app-komponen-directive',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './komponen-directive.html',
    styleUrl: './komponen-directive.scss'
})
export class KomponenDirective {
    // 1. @if state
    isLoggedIn = false;
    userRole = 'guest'; // 'admin', 'editor', 'guest'

    // 2. @for state
    users: User[] = [
        { id: 1, name: 'Budi', role: 'Admin' },
        { id: 2, name: 'Ani', role: 'User' },
        { id: 3, name: 'Citra', role: 'Editor' }
    ];
    items: any[] = []; // For @empty demo

    // 3. @switch state
    selectedDay = 'monday';
    days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    // Methods
    toggleLogin() {
        this.isLoggedIn = !this.isLoggedIn;
    }

    setRole(role: string) {
        this.userRole = role;
    }

    addUser() {
        const id = this.users.length + 1;
        const roles = ['Admin', 'User', 'Editor'];
        const randomRole = roles[Math.floor(Math.random() * roles.length)];
        this.users.push({
            id,
            name: `User ${id}`,
            role: randomRole
        });
    }

    removeUser(id: number) {
        this.users = this.users.filter(u => u.id !== id);
    }

    setDay(day: string) {
        this.selectedDay = day;
    }
}
