import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  title = "Produtos"
  isActive = true;
  desconto = 0.9;
  phone = "61999999999";
  teste = 0;

  dateToday = new Date();

  products: Array<Product> = this.productService.getProducts();

  constructor(
    private productService: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  mostrarProduto() {
      this.isActive = !this.isActive;
  }

  obterDesconto(id: Number) {
    this.products.map(p => {
        console.log(p.id == id ? p.price * this.desconto : p.price)
    })
  }

  detailsProduct(idProduct: number) {
    this.router.navigateByUrl(`/product-details/${idProduct}`);
  }
}
