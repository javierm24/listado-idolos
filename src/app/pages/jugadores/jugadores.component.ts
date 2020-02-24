import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../jugadores.service';
import { JugadorModel } from '../../models/jugador.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html'
})
export class JugadoresComponent implements OnInit {

  jugadores: JugadorModel[] = [];
  cargando = false;

  constructor(private jugadoresService: JugadoresService) { }

  ngOnInit() {
    this.cargando = true;
    this.jugadoresService.getJugadores().subscribe(data => {
      this.jugadores = data;
      this.cargando = false;
    });
  }
  borrarJugador(jugador: JugadorModel, i: number) {

    Swal.fire({
      title: 'Esta seguro?',
      text: `Seguro que desea eliminar ${jugador.nombre}`,
      showConfirmButton: true,
      showCancelButton: true,
    }).then(data =>{
      if(data.value) {
        this.jugadores.splice(i, 1);
        this.jugadoresService.borrarJugador(jugador.id).subscribe();
      }
    });
  }

}
