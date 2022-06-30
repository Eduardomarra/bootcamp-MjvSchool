import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isActive = true;
  products: Array<Product> = [
    {
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/95cb4aeed4e54a198160ab4900c13b93_9366/Tenis_Grand_Court_SE_Preto_FW6690_01_standard.jpg',
      isAvaliable: true
    },
    {
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
      image: 'https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/28/NQQ-4378-028/NQQ-4378-028_zoom1.jpg?ts=1649619411',
      isAvaliable: false
    },
    {
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
      image: 'https://authenticfeet.vteximg.com.br/arquivos/ids/239169/Tenis-adidas-Day-Jogger-Masculino-Multicolor.jpg?v=637407222101600000',
      isAvaliable: true
    },
    {
      name: 'Product 4',
      description: 'Description 4',
      price: 400,
      image: 'https://40378.cdn.simplo7.net/static/40378/sku/masculino-tenis-adidas-kanadia-tr7--p-1639664463305.jpg',
      isAvaliable: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  mostrarProduto() {
      this.isActive = !this.isActive;
  }
}
