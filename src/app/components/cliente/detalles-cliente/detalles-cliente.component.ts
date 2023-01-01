import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-detalles-cliente',
  templateUrl: './detalles-cliente.component.html',
  styleUrls: ['./detalles-cliente.component.css']
})
export class DetallesClienteComponent implements OnInit {

  idCliente:number;
  cliente:Cliente;
  constructor(private route:ActivatedRoute, private clienteServicio:ClienteService) { }

  ngOnInit(): void {
    this.idCliente = this.route.snapshot.params['idCliente'];
    this.cliente = new Cliente();
    this.clienteServicio.obtenerClienteporId(this.idCliente).subscribe(dato =>{
      this.cliente = dato;
    });
  }

}
