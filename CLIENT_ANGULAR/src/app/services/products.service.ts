import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/products';

const url = 'https://dummyjson.com/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(public httpClient: HttpClient) {}

  public getAllProducts(): Product[] {
    const arr: Product[] = [];
    arr.push(new Product(1, 'apple', 3, 100));
    arr.push(new Product(2, 'banana', 5, 200));
    arr.push(new Product(3, 'cola', 6, 600));

    return arr;
  }

  public getAllProductsAsync1(successCallback: any, failCallback: any): void {
    setTimeout(() => {
      try {
        const arr: Product[] = [];
        arr.push(new Product(1, 'apple', 3, 100));
        arr.push(new Product(2, 'banana', 5, 200));
        arr.push(new Product(3, 'cola', 6, 600));
        console.log(arr);
        successCallback(arr);
      } catch (err) {
        failCallback(err);
      }
    }, 3000);
  }

  public getAllProductsAsync2(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      try {
        const arr: Product[] = [];
        arr.push(new Product(1, 'apple', 3, 100));
        arr.push(new Product(2, 'banana', 5, 200));
        arr.push(new Product(3, 'cola', 6, 600));
        console.log(arr);
        resolve(arr);
      } catch (err) {
        reject(err);
      }
    });
  }

  public getAllProductsAsync3(): Observable<Product[]> {
    return Observable.create((observer: any) => {
      try {
        const arr: Product[] = [];
        arr.push(new Product(1, 'apple', 3, 100));
        arr.push(new Product(2, 'banana', 5, 200));
        arr.push(new Product(3, 'cola', 6, 600));
        console.log(arr);
        observer.next(arr);
      } catch (err) {
        observer.error(err);
      }
    });
  }

  public getProductsAsync(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/assets/json/products.json');
  }

  getProductsApi(): Promise<any> {
    return this.httpClient.get(url).toPromise();
  }
}
