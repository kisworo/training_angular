import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

@Component({
    selector: 'app-komponen-product',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './komponen-product.html',
    styleUrl: './komponen-product.scss'
})

export class KomponenProduct {

}