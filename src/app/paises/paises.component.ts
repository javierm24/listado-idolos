import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../paises.service';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styles: [`.img{width: 50px;}
  `]
})
export class PaisesComponent implements OnInit {

  paises: any = [];

  constructor(private paisesSevice: PaisesService) { 
    this.paisesSevice.getPais().subscribe(data => {
      console.log(data);
      this.paises = data;
    });
  }

  ngOnInit() {
  }

}
