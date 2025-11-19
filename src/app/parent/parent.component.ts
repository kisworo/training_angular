import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

@Component({
    selector: 'app-parent',
    standalone: true,
    imports: [CommonModule, FormsModule, ChildComponent],
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.scss'
})
export class ParentComponent {
    // Data yang akan dikirim ke child
    products: Product[] = [
        { id: 1, name: 'Laptop', price: 15000000, quantity: 5 },
        { id: 2, name: 'Mouse', price: 150000, quantity: 20 },
        { id: 3, name: 'Keyboard', price: 500000, quantity: 15 },
        { id: 4, name: 'Monitor', price: 3000000, quantity: 8 }
    ];

    selectedProduct: Product | null = null;
    totalRevenue = 0;

    // Method yang akan dipanggil dari child via @Output
    onProductSelected(product: Product) {
        this.selectedProduct = product;
        console.log('Product selected from child:', product);
    }

    onQuantityChanged(data: { productId: number, newQuantity: number }) {
        const product = this.products.find(p => p.id === data.productId);
        if (product) {
            product.quantity = data.newQuantity;
            this.calculateTotalRevenue();
        }
    }

    onProductDeleted(productId: number) {
        this.products = this.products.filter(p => p.id !== productId);
        if (this.selectedProduct?.id === productId) {
            this.selectedProduct = null;
        }
        this.calculateTotalRevenue();
    }

    calculateTotalRevenue() {
        this.totalRevenue = this.products.reduce(
            (sum, product) => sum + (product.price * product.quantity),
            0
        );
    }

    addNewProduct() {
        const newId = Math.max(...this.products.map(p => p.id)) + 1;
        this.products.push({
            id: newId,
            name: `Product ${newId}`,
            price: Math.floor(Math.random() * 1000000) + 100000,
            quantity: Math.floor(Math.random() * 20) + 1
        });
        this.calculateTotalRevenue();
    }

    ngOnInit() {
        this.calculateTotalRevenue();
    }
}
