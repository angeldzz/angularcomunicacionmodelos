import { Component } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-padre-coches',
  standalone: false,
  templateUrl: './padre-coches.component.html',
  styleUrl: './padre-coches.component.css',
})
export class PadreCochesComponent {
  public cochesArray: Array<Coche>
  constructor(){
    this.cochesArray = [
      new Coche("Ford","Mustang",400,20,false),
      new Coche("Mazda","MX5",210,10,false),
      new Coche("Lamborghini","Gallardo",400,60,false),
    ]
  }
}
