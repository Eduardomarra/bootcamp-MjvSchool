import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  templateUrl: './create-products-page.component.html',
  styleUrls: ['./create-products-page.component.scss']
})
export class CreateProductPageComponent implements OnInit {

  formProduto = new FormGroup({
    descricao: new FormControl("", [Validators.required]),
    quantidade: new FormControl(1, [Validators.required]),
    preco: new FormControl(0, [Validators.required, Validators.min(100), Validators.max(2000)]),
    imagem: new FormControl("")
  })

  constructor(
    private router: Router,
    private productService: ProductsService) { }

  ngOnInit(): void {
    this.formProduto.controls['imagem'].setValue("https://images.pexels.com/photos/4099971/pexels-photo-4099971.jpeg?cs=srgb&dl=pexels-christian-naccarato-4099971.jpg&fm=jpg");
  }

  onSubmit() {
    const formValue = this.formProduto.value;
    this.productService.createProduct(formValue);
    this.router.navigateByUrl("/sell")
  }

}
