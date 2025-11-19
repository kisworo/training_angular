import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

@Component({
    selector: 'app-child',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss'
})
export class ChildComponent {
    // @Input - Menerima data dari parent
    @Input() product!: Product;
    @Input() isSelected: boolean = false;

    // @Output - Mengirim event ke parent
    @Output() productSelected = new EventEmitter<Product>();
    @Output() quantityChanged = new EventEmitter<{ productId: number, newQuantity: number }>();
    @Output() productDeleted = new EventEmitter<number>();

    isEditing = false;
    editQuantity = 0;

    // Method untuk emit event ke parent
    selectProduct() {
        this.productSelected.emit(this.product);
    }

    startEdit() {
        this.isEditing = true;
        this.editQuantity = this.product.quantity;
    }

    saveQuantity() {
        if (this.editQuantity > 0) {
            this.quantityChanged.emit({
                productId: this.product.id,
                newQuantity: this.editQuantity
            });
            this.isEditing = false;
        }
    }

    cancelEdit() {
        this.isEditing = false;
        this.editQuantity = this.product.quantity;
    }

    deleteProduct() {
        if (confirm(`Delete ${this.product.name}?`)) {
            this.productDeleted.emit(this.product.id);
        }
    }

    increaseQuantity() {
        this.quantityChanged.emit({
            productId: this.product.id,
            newQuantity: this.product.quantity + 1
        });
    }

    decreaseQuantity() {
        if (this.product.quantity > 0) {
            this.quantityChanged.emit({
                productId: this.product.id,
                newQuantity: this.product.quantity - 1
            });
        }
    }

    getTotalValue(): number {
        return this.product.price * this.product.quantity;
    }
}
