import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habitacion } from '../modelos/habitacion';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  //url para listar empleados en el backend
  private baseURL = "http://localhost:8080/api/v1/habitaciones";
  
  constructor(private httpClient: HttpClient) { }

  obtenerListaHabitaciones():Observable<Habitacion[]>{
    return this.httpClient.get<Habitacion[]>(`${this.baseURL}`);
  }

  registrarHabitacion(habitacion:Habitacion):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,habitacion)
  }

  actualizarHabitacion(id:number,habitacion:Habitacion): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,habitacion);
  }

  eliminarHabitacion(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  obtenerHabitacionporId(id:number):Observable<Habitacion>{
    return this.httpClient.get<Habitacion>(`${this.baseURL}/${id}`);
  }

  
}