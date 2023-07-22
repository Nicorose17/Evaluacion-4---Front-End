import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  comentario: any;

  constructor(private http:HttpClient ) { }

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/comments/?_limit=10").subscribe(
      resultado =>{
        this.comentario = resultado;
      }
    )
  }


  producto = { codigo: 0, descripcion: "", comentario:"" }
  productos = [
    { codigo: 1, descripcion: "RAM Corsair", comentario: "Muy bueno" },
    { codigo: 2, descripcion: "CPU Ryzen 5", comentario: "No es lo que esperaba" },
    { codigo: 3, descripcion: "GPU Gigabyte", comentario: "No lo recomendaria" }
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
      comentario: this.producto.comentario
    });

    this.producto.codigo = 0;
    this.producto.descripcion = "";
    this.producto.comentario ="";
  }

  seleccionar(producto: { codigo: number, descripcion: string; comentario: string }) {
    this.producto.codigo = producto.codigo;
    this.producto.descripcion = producto.descripcion;
    this.producto.comentario = producto.comentario;
  }

  modificar() {
    for (let index = 0; index < this.productos.length; index++)
      if (this.productos[index].codigo == this.producto.codigo) {
        this.productos[index].descripcion = this.producto.descripcion;
        this.productos[index].comentario = this.producto.comentario;
        return;
      }
    alert("No existe el codigo del producto inrgesado")
  }
}
