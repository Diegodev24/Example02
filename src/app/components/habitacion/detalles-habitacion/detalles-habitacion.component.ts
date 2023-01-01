import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Habitacion } from 'src/app/modelos/habitacion';
import { HabitacionService } from 'src/app/servicios/habitacion.service';

@Component({
  selector: 'app-detalles-habitacion',
  templateUrl: './detalles-habitacion.component.html',
  styleUrls: ['./detalles-habitacion.component.css']
})
export class DetallesHabitacionComponent implements OnInit {

  id:number;
  habitacion:Habitacion;
  constructor(private route:ActivatedRoute, private habitacionServicio:HabitacionService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.habitacion = new Habitacion();
    this.habitacionServicio.obtenerHabitacionporId(this.id).subscribe(dato =>{
      this.habitacion = dato;
      
    })
  }

}
