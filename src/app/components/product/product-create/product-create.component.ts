import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: null,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Cadastro de Produto',
      icon: 'add',
      routerUrl: '/products',
    };
  }

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
