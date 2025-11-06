import { Component } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  standalone: false,
  templateUrl: './padredeportes.component.html',
  styleUrl: './padredeportes.component.css',
})
export class PadredeportesComponent {
  public deportes: Array<string>
  public mensaje: string;

  seleccionarFavoritoPadre(event:any){
    this.mensaje = "Deporte favorito: " + event
} 
  constructor(){
    this.mensaje = ""
    this.deportes = ["Futbol", "Tenis", "Curling", "Boxeo", "Petancona"]
  }
}
