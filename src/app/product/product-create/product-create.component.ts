import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: '',
      name: '',
      price: '',
      description: ''
    })
  }

  submit() {
    const product = this.productForm.value;
    this.productService.save(product);
    this.productForm.reset();
  }
}
