import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente} from '../modelos/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {

    private baseURL = "http://localhost:8080/api/v1/clientes";
  constructor(private httpClient: HttpClient) {}
  
  obtenerListaClientes():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
  }

  registrarCliente(cliente:Cliente):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,cliente);
  }

  actualizarCliente(idCliente:number,cliente:Cliente): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idCliente}`,cliente);
  }

  eliminarCliente(idCliente:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idCliente}`);
  }

  obtenerClienteporId(idCliente:number):Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.baseURL}/${idCliente}`);
  }
}
