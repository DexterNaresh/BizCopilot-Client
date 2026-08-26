import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './pages/product-list/product-list.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: '<biz-product-list-page></biz-product-list-page>'
})
export class ProductsComponent { }
