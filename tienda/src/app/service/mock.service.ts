import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  getProducts(): Observable<any> {
    const response = [
      {
        id:'P001',
        productName:'Mouse inalámbrico ',
        category:'Accesorios',
        price:15.00,
        stock:20 ,
        active:true,
        discount:0,
        checked:false
      },
      {
        id:'P002',
        productName:'Teclado mecánico ',
        category:'Accesorios',
        price:45.00,
        stock:20 ,
        active:true,
        discount:5,
        checked:false
      },
      {
        id:'P003',
        productName:'Monitor 24 pulgadas',
        category:'Pantallas ',
        price:15.00,
        stock:20 ,
        active:true,
        discount:10,
        checked:false
      },
      {
        id:'P004',
        productName:'Laptop Core i5 ',
        category:'Computadoras',
        price:15.00,
        stock:20 ,
        active:true,
        discount:8,
        checked:false
      },
      {
        id:'P005',
        productName:'Audífonos Bluetooth ',
        category:'Audio ',
        price:15.00,
        stock:20 ,
        active:true,
        discount:0,
        checked:false
      },
      {
        id:'P006',
        productName:'Webcam Full HD ',
        category:'Accesorios',
        price:15.00,
        stock:0 ,
        active:true,
        discount:0,
        checked:false
      },
      {
        id:'P007',
        productName:'Silla gamer ',
        category:'Muebles',
        price:15.00,
        stock:20 ,
        active:true,
        discount:12,
        checked:false
      },
      {
        id:'P008',
        productName:'Disco SSD 1TB ',
        category:'Almacenamiento',
        price:15.00,
        stock:20 ,
        active:true,
        discount:7,
        checked:false
      }
    ];
    return of(response);
  }



}
