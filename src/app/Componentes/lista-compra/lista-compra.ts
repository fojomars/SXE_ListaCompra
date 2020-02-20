import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.html',
  styleUrls: ['./lista-compra.css']
})
export class ListaProductos implements OnInit {

  productos: any[];
  constructor() {
    const producto1 = {
      titulo: 'Macarrones',
      comprado: false
    };
    const producto2 = {
      titulo: 'Arroz',
      comprado: false,
    };
    const producto3 = {
      titulo: 'Judias',
      comprado: false,
    };
    const producto4 = {
      titulo: 'Patatas',
      comprado: false,
    };
    const producto5 = {
      titulo: 'Pescado',
      comprado: false,
    };
    const producto6 = {
      titulo: 'Naranjas',
      comprado: false,
    };
    const producto7 = {
      titulo: 'Platanos',
      comprado: false,
    };
    const producto8 = {
      titulo: 'Tomates',
      comprado: false,
    };
    const producto9 = {
      titulo: 'Galletas',
      comprado: false,
    };
    const producto10 = {
      titulo: 'Cebolla',
      comprado: false,
    };

    this.productos = [];
    this.productos.push(producto1);
    this.productos.push(producto2);
    this.productos.push(producto3);
    this.productos.push(producto4);
    this.productos.push(producto5);
    this.productos.push(producto6);
    this.productos.push(producto7);
    this.productos.push(producto8);
    this.productos.push(producto9);
    this.productos.push(producto10);
    }

  ngOnInit() {
  }

  comprar(producto) {
    producto.comprado = !producto.comprado;
  }
}
