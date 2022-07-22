import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  product?: Product;

  constructor(
    private activedRoute: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['productId']);
      this.product = this.productsService.getById(id);
    })
  }


}
