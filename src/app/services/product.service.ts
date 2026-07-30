import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Observable<ProductModel[]> {

    const products: ProductModel[] = [];

    for (let i = 1; i <= 100; i++) {

      products.push({
        id: i,
        code: `PRD-${1000 + i}`,
        name: `Product ${i}`,
        category: ['Laptop', 'Monitor', 'Mouse', 'Keyboard'][i % 4],
        supplier: `Supplier ${i % 8 + 1}`,
        brand: ['Dell', 'HP', 'Lenovo', 'Asus'][i % 4],
        model: `M-${i}`,
        color: ['Black', 'White', 'Silver'][i % 3],
        country: ['USA', 'Germany', 'Japan', 'China'][i % 4],
        price: 100 + i * 10,
        cost: 80 + i * 8,
        quantity: 20 + i,
        reserved: i % 10,
        sold: i * 2,
        rating: (i % 5) + 1,
        weight: 1.2 + i * 0.01,
        width: 20 + i,
        height: 10 + i,
        depth: 5 + i,
        warranty: 12,
        createdDate: '2026-01-01',
        updatedDate: '2026-07-20',
        isActive: i % 2 === 0,
        status: i % 3 === 0 ? 'Inactive' : 'Active',
        description: `Description for Product ${i}`
      });
    }

    return of(products);
  }
}
