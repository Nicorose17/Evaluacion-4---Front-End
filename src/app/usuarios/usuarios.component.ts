import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(
      resultado => {
        this.usuarios = resultado;
      }
    )
  }

  producto = { codigo: 0, nombre: "", nusuario: "", email: "", telefono: 0 }
  productos = [
    { codigo: 1, nombre: "Javier gonaz", nusuario: "Javierrre", email: "Julianne.OConner@kory.org", telefono: 283693140 },
    { codigo: 2, nombre: "Jorge polo", nusuario: "Jorgebet", email: "Karley_Dach@jasper.info", telefono: 488395732 },
    { codigo: 3, nombre: "Juan nieve", nusuario: "Juanix", email: "Rey.Padberg@karina.biz", telefono: 319977334 }
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
      nombre: this.producto.nombre,
      nusuario: this.producto.nusuario,
      email: this.producto.email,
      telefono: this.producto.telefono
    });

    this.producto.codigo = 0;
    this.producto.nombre = "";
    this.producto.nusuario = "";
    this.producto.email = "";
    this.producto.telefono = 0;
  }

  seleccionar(producto: { codigo: number, nombre: string; nusuario: string, email: string, telefono: number }) {
    this.producto.codigo = producto.codigo;
    this.producto.nombre = producto.nombre;
    this.producto.nusuario = producto.nusuario;
    this.producto.email = producto.email;
    this.producto.telefono = producto.telefono;
  }

  modificar() {
    for (let index = 0; index < this.productos.length; index++)
      if (this.productos[index].codigo == this.producto.codigo) {
        this.productos[index].nombre = this.producto.nombre;
        this.productos[index].nusuario = this.producto.nusuario;
        this.productos[index].email = this.producto.email;
        this.productos[index].telefono = this.producto.telefono;
        return;
      }
    alert("No existe el codigo del producto inrgesado")
  }
}
