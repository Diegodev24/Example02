import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { ClienteComponent } from './components/cliente/cliente.component';

import { RouterModule } from '@angular/router';
import { RegistrarHabitacionComponent } from './components/habitacion/registrar-habitacion/registrar-habitacion.component';
import { DetallesHabitacionComponent } from './components/habitacion/detalles-habitacion/detalles-habitacion.component';
import { FormsModule } from '@angular/forms';
import { ActualizarHabitacionComponent } from './components/habitacion/actualizar-habitacion/actualizar-habitacion.component';
import { RegistrarClienteComponent } from './components/cliente/registrar-cliente/registrar-cliente.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { DetallesClienteComponent } from './components/cliente/detalles-cliente/detalles-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HabitacionComponent,
    ClienteComponent,
    RegistrarHabitacionComponent,
    DetallesHabitacionComponent,
    ActualizarHabitacionComponent,
    RegistrarClienteComponent,
    ActualizarClienteComponent,
    DetallesClienteComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'habitaciones', component:HabitacionComponent},
      {path: 'crear', component:RegistrarHabitacionComponent},
      {path: 'detalles-habitacion/:id', component:DetallesHabitacionComponent},
      {path: 'actualizar-habitacion/:id', component:ActualizarHabitacionComponent},
      {path: 'clientes', component:ClienteComponent},
      {path: 'detalles-cliente/:idCliente', component:DetallesClienteComponent},
      {path: 'registrar-cliente', component:RegistrarClienteComponent},
      {path: 'actualizar-cliente/:idCliente', component:ActualizarClienteComponent},
      {path: '**', redirectTo:'/', pathMatch:'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
