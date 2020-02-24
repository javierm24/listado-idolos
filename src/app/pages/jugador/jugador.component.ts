import { Component, OnInit } from '@angular/core';
import { JugadorModel } from 'src/app/models/jugador.model';
import { NgForm } from '@angular/forms';
import { JugadoresService } from '../../jugadores.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html'
})
export class JugadorComponent implements OnInit {


  jugador: JugadorModel = new JugadorModel();

  constructor(private jugadoresService: JugadoresService, private route: ActivatedRoute) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this.jugadoresService.getJugador(id).subscribe((data: JugadorModel) =>{
        this.jugador = data;
        this.jugador.id = id;
      });
    }
  }


  guardar( form: NgForm ) {
    if (form.invalid) {
      console.log('formulario no valido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando informacion',
      allowOutsideClick: false

    });

    Swal.showLoading();

    let peticion: Observable<any>;



    if (this.jugador.id) {

      peticion = this.jugadoresService.actualizarJugador(this.jugador);

    } else {

      peticion = this.jugadoresService.crearJugador(this.jugador);
  }

  peticion.subscribe(data => {
    Swal.fire({
      title: this.jugador.nombre,
      text: 'Se actualizo correctamente',
    })
  })
}
}
