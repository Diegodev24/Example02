import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {

  idCliente:number;
  cliente:Cliente = new Cliente();
  constructor(private clienteServicio:ClienteService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idCliente = this.route.snapshot.params['idCliente'];
    this.clienteServicio.obtenerClienteporId(this.idCliente).subscribe(dato =>{
      this.cliente = dato;
    }, error => console.log(error));
  }

  irListaClientes(){
    this.router.navigate(['/clientes']);
    swal('Cliente Actualizado',`El cliente ${this.cliente.nombreCliente} ha sido actualizado con exito`,`success`)
  }

  onSubmit(){
    this.clienteServicio.actualizarCliente(this.idCliente,this.cliente).subscribe(dato=>{
      this.irListaClientes();
    },error => console.log(error))
  }

}
