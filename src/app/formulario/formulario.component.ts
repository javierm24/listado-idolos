import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})

export class FormularioComponent{
  constructor() { }





  guardar(forma: NgForm) {
    console.log(forma);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Registrado correctamente ${forma.controls['nombre'].value}`,
    });
  }

}
