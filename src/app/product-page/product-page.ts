import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { KomponenProduct } from "../komponen-product/komponen-product";


interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

@Component({
    selector: 'app-parent',
    standalone: true,
    imports: [CommonModule, FormsModule, KomponenProduct],
    templateUrl: './product-page.html',
    styleUrl: './product-page.scss'
})

export class ProductPage {

}

