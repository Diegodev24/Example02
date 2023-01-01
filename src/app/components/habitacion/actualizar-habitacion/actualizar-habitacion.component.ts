import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habitacion } from 'src/app/modelos/habitacion';
import { HabitacionService } from 'src/app/servicios/habitacion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-habitacion',
  templateUrl: './actualizar-habitacion.component.html',
  styleUrls: ['./actualizar-habitacion.component.css']
})
export class ActualizarHabitacionComponent implements OnInit {

  id:number;
  habitacion:Habitacion = new Habitacion();
  constructor(private habitacionServicio:HabitacionService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.habitacionServicio.obtenerHabitacionporId(this.id).subscribe(dato =>{
      this.habitacion = dato;
    }, error => console.log(error));
  }

  irListaHabitaciones(){
    this.router.navigate(['/habitaciones']);
    swal('Habitacion Actualizada',`La Habitacion ${this.habitacion.nombrehabitacion} ha sido actualizada con exito`,`success`)
  }

  onSubmit(){
    this.habitacionServicio.actualizarHabitacion(this.id,this.habitacion).subscribe(dato=>{
      this.irListaHabitaciones();
    },error => console.log(error))
  }

}
