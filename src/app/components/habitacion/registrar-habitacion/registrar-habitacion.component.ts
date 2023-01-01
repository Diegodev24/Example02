import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habitacion } from 'src/app/modelos/habitacion';
import { HabitacionService } from 'src/app/servicios/habitacion.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-registrar-habitacion',
  templateUrl: './registrar-habitacion.component.html',
  styleUrls: ['./registrar-habitacion.component.css']
})
export class RegistrarHabitacionComponent implements OnInit {


  habitacion: Habitacion= new Habitacion();
  constructor(private habitacionServicio:HabitacionService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  registrarHabitacion(){
    this.habitacionServicio.registrarHabitacion(this.habitacion).subscribe(dato =>{
      console.log(dato);
      this.irListaHabitaciones();
    },error => console.log(error));
  }

  irListaHabitaciones(){
    this.router.navigate(['/habitaciones']);
    swal('Habitacion registrada',`La habitacion ${this.habitacion.nombrehabitacion} ha sido registrada con exito`,`success`);
  }
  
  onSubmit(){
    this.registrarHabitacion();
  }

}
