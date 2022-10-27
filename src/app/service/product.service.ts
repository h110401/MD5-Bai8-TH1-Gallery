import {Injectable} from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [{
    id: 'UUID1',
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 'UUID2',
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 'UUID3',
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 'UUID4',
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 'UUID5',
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  constructor() {
  }

  getAll() {
    return this.products
  }

  save(product: Product) {
    this.products.push(product);
  }
}
