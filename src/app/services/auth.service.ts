// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface User {
    username: string;
    role: 'admin' | 'user';
    token?: string;
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private currentUserSubject = new BehaviorSubject<User | null>(null);
    public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

    constructor() {
        // Load dari localStorage
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUserSubject.next(JSON.parse(savedUser));
        }
    }

    login(username: string, password: string): boolean {
        // Simulasi login (ganti dengan API call)
        if (username && password) {
            const user: User = {
                username,
                role: username === 'admin' ? 'admin' : 'user',
                token: 'fake-jwt-token'
            };

            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return true;
        }
        return false;
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    isLoggedIn(): boolean {
        return this.currentUserSubject.value !== null;
    }

    getCurrentUser(): User | null {
        return this.currentUserSubject.value;
    }
}