import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JugadorModel } from './models/jugador.model';


import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  private url = 'https://la-mazucamba.firebaseio.com';

  constructor(private http: HttpClient) { }

  crearJugador(jugador: JugadorModel) {

    return this.http.post(`${this.url}/jugadores.json`, jugador)
    .pipe(map((data: any) => {
      jugador.id = data.name;
      return jugador;
    }));

  }

  actualizarJugador(jugador: JugadorModel) {

    const jugadorTemp = {
      ...jugador
    };

    delete jugadorTemp.id;

    return this.http.put(`${this.url}/jugadores/${jugador.id}.json`, jugadorTemp);

  }


  borrarJugador(id) {
    return this.http.delete(`${this.url}/jugadores/${id}.json`);
  }



  getJugador(id) {
    return this.http.get(`${this.url}/jugadores/${id}.json`);
  }



  getJugadores() {
    return this.http.get(`${this.url}/jugadores.json`).pipe(map(data => this.crearArreglo(data),
    delay(0))
    );
  }
  private crearArreglo(jugadoresObj: object) {

    const jugadores: JugadorModel[] = [];
    if (jugadoresObj === null) { return []; }

    Object.keys(jugadoresObj).forEach(key => {
      const jugador: JugadorModel = jugadoresObj[key];
      jugador.id = key;
      jugadores.push(jugador);
    });

    return jugadores;
  }
}
