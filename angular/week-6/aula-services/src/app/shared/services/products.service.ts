import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Array<Product> = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      image: 'https://authenticfeet.vteximg.com.br/arquivos/ids/239169/Tenis-adidas-Day-Jogger-Masculino-Multicolor.jpg?v=637407222101600000',
      isAvaliable: true
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
      image: 'https://40378.cdn.simplo7.net/static/40378/sku/masculino-tenis-adidas-kanadia-tr7--p-1639664463305.jpg',
      isAvaliable: false
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
      image: 'https://authenticfeet.vteximg.com.br/arquivos/ids/239169/Tenis-adidas-Day-Jogger-Masculino-Multicolor.jpg?v=637407222101600000',
      isAvaliable: true
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description 4',
      price: 400,
      image: 'https://40378.cdn.simplo7.net/static/40378/sku/masculino-tenis-adidas-kanadia-tr7--p-1639664463305.jpg',
      isAvaliable: true
    }
  ]


  constructor() { }

  getProducts() {
    return this.products
  }

  getById(id: number) {
    return this.products.find(product => product.id === id)
  }
}
