import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PaisesComponent } from './paises/paises.component';

import { HttpClientModule } from '@angular/common/http';
import { JugadorComponent } from './pages/jugador/jugador.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PaisesComponent,
    JugadorComponent,
    JugadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
