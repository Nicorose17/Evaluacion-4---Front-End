import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'evaluacion-4';
  producto = { codigo: 0, descripcion: "", precio: 0 }
  productos = [
    { codigo: 1, descripcion: "ram", precio: 50000 },
    { codigo: 2, descripcion: "cpu", precio: 150000 },
    { codigo: 3, descripcion: "gpu", precio: 300000 }
  ];

  hayArticulos() {
    return this.productos.length > 0;
  }

  borrar(codigo: number) {
    for (let index = 0; index < this.productos.length; index++) {
      if (this.productos[index].codigo == codigo) {
        this.productos.splice(index, 1);
        return;
      }
    }
  }

  agregar() {
    if (this.producto.codigo == 0) {
      alert("Debe ingresar un codigo distinto de cero");
      return;
    }

    for (let index = 0; index < this.productos.length; index++)
      if (this.productos[index].codigo == this.producto.codigo) {
        alert("Ya existe el producto con ese codigo");
        return;
      }

    this.productos.push({
      codigo: this.producto.codigo,
      descripcion: this.producto.descripcion,
      precio: this.producto.precio
    });

    this.producto.codigo = 0;
    this.producto.descripcion = "";
    this.producto.precio = 0;
  }

  seleccionar(producto: { codigo: number, descripcion: string; precio: number }) {
    this.producto.codigo = producto.codigo;
    this.producto.descripcion = producto.descripcion;
    this.producto.precio = producto.precio;
  }

  modificar() {
    for (let index = 0; index < this.productos.length; index++)
      if (this.productos[index].codigo == this.producto.codigo) {
        this.productos[index].descripcion = this.producto.descripcion;
        this.productos[index].precio = this.producto.precio;
        return;
      }
    alert("No existe el codigo del producto inrgesado")
  }
}
