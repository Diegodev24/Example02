import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes:Cliente[];
  constructor(private clienteServicio:ClienteService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerCliente();
  }

  actualizarCliente(idCliente:number){
    this.router.navigate(['actualizar-cliente',idCliente]);
  }

  eliminarCliente(idCliente:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al cliente",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result)=>{
      if(result.value){
        this.clienteServicio.eliminarCliente(idCliente).subscribe(dato =>{
          console.log(dato);
          this.obtenerCliente();
          swal(
            'Cliente eliminado',
            'El cliente a sido eliminado con éxito',
            'success'
          )
        })
      }
    })
  }


  crearCliente(){
    this.router.navigate(['registrar-cliente']);
  }

  private obtenerCliente(){
    this.clienteServicio.obtenerListaClientes().subscribe(dato =>{
      this.clientes = dato;
    });
  }

  verDetalles(idCliente:number){
    this.router.navigate(['detalles-cliente',idCliente])
  }



}
