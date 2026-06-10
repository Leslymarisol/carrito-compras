import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MockService} from "../../service/mock.service";
import {distinct} from "rxjs";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  columns = [
    {key: 'name', title: 'Producto'},
    {key: 'category', title: 'Categoría'},
    {key: 'price', title: 'Precio'},
    {key: 'stock', title: 'Stock'},
    {key: 'discount', title: 'Descuento'},
    {key: 'add', title: 'Agregar al carrito'},

  ]

  productsList:any[] = [];
  filteredProducts:any[] = [];
  searchText:string='';
  addedProductsList:any[]=[];
  subtotal:number = 0
  iva:number = 0;
  total:number = 0;
  discount:number = 0;


  constructor(
    private router: Router,
    private mockService:MockService,
  ) { }

  ngOnInit() {
    this.loadProductos();
  }

  loadProductos() {
    this.mockService.getProducts().subscribe(response => {
      this.productsList = response.filter((product:any) => product.active);
      this.filteredProducts = this.productsList;
    })
  }

  validateStock(stock:number):string{
    return stock == 0 ? "No disponible" : `${stock}`;
  }

  searchProduct(){
    this.filteredProducts = this.productsList.filter((product:any) => product.productName.toLowerCase().includes(this.searchText.toLowerCase()) || product.category.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  validateEnableAdd(product:any):boolean{
    return product.stock == 0;
  }

  handleCheckedProduct(product:any){
    if (product.checked){
      this.addedProductsList.push(product);
      this.subtotal = this.addedProductsList.reduce((total:any, product:any) => total + product.price, 0);
      this.iva = this.subtotal * 0.15;
      this.discount = product.discount / 100;
      this.total = (this.iva + this.subtotal) - this.discount;
    }
  }

  clean(){
    this.filteredProducts.forEach(product => {
      product.checked = false;
    });
    this.addedProductsList = [];
    this.iva = 0.0;
    this.discount = 0.0;
    this.total = 0.0;
  }

  protected readonly distinct = distinct;
}
