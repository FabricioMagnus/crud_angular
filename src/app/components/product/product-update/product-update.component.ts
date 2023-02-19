import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  product: Product = {
    name: '',
    price: null,
  };
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Atualizar Cadastro de Produto',
      icon: 'edit',
      routerUrl: '/products',
    };
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.productService.readById(id).subscribe((item) => {
      this.product = item;
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto editado com sucesso!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
