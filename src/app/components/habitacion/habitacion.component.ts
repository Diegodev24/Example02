import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/modelos/habitacion';
import { HabitacionService } from 'src/app/servicios/habitacion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css']
})
export class HabitacionComponent implements OnInit {

  habitaciones:Habitacion[];
  constructor(private habitacionServicio:HabitacionService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerHabitacion();
  }

  actualizarHabitacion(id:number){
    this.router.navigate(['actualizar-habitacion',id]);
  }
  eliminarHabitacion(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la habitacion",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.habitacionServicio.eliminarHabitacion(id).subscribe(dato => {
          console.log(dato);
          this.obtenerHabitacion();
          swal(
            'Habitacion eliminada',
            'La habitacion ha sido eliminada con éxito',
            'success'
          )
        })
      }
    })
  }

  crearHabitacion(){
    this.router.navigate(['crear']);
  }

  private obtenerHabitacion(){
    this.habitacionServicio.obtenerListaHabitaciones().subscribe(dato =>{
      this.habitaciones = dato;
    });
  }

  verDetalles(id:number){
    this.router.navigate(['detalles-habitacion',id])
  }

}
