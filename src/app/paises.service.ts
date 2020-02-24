import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }


  getPais() {
    return this.http.get('https://restcountries.eu/rest/v2/lang/es')
  }


}
