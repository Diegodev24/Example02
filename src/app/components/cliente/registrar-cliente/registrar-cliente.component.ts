import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  constructor(private clienteServicio:ClienteService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  registrarCliente(){
    this.clienteServicio.registrarCliente(this.cliente).subscribe(dato =>{
      console.log(dato);
      this.irListaClientes();
    },error => console.log(error));
  }

  irListaClientes(){
    this.router.navigate(['/clientes']);
    swal('Cliente registrado',`El cliente ${this.cliente.nombreCliente} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.registrarCliente();
  }

}
