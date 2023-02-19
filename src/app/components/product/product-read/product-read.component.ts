import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css'],
})
export class ProductReadComponent implements OnInit {
  productList: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.productList = products;
      // console.log('lista de produtos', this.productList);
    });
  }

  deleteProduct(id: string): void {
    this.productService.delete(id).subscribe((product) => {
      this.productService.showMessage('Produto deletado com sucesso');
      this.productService.read().subscribe((products) => {
        this.productList = products;
      });
    });
  }
}
