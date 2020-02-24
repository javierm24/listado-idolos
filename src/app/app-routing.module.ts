import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JugadorComponent } from './pages/jugador/jugador.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';


const routes: Routes = [
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'jugador/:id', component: JugadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'jugadores' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
