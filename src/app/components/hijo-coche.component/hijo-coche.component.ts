import { Component, Input, OnInit } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-hijo-coche',
  standalone: false,
  templateUrl: './hijo-coche.component.html',
  styleUrl: './hijo-coche.component.css',
})
export class HijoCocheComponent implements OnInit{
  @Input() car!: Coche;
  public mensaje: string;
  
  constructor(){
    this.mensaje = ""
  }
  comprobarEstado(): boolean{

    if(this.car.estado === false){
      this.mensaje = "El Coche esta apagado!!!";
      this.car.velocidad = 0
      return false;

    }else{
      this.mensaje = "Arrancado";
      return true;
    }
  }
  encenderCoche():void {
    this.car.estado = !this.car.estado;
    this.comprobarEstado()
    }
  acelerarCoche():void {
    if(this.comprobarEstado() === false){
      alert("Estoy apagado, no puedes acelerarme!!!")
    }else{
      this.car.velocidad += this.car.aceleracion;
    }
  }
  ngOnInit(): void {
    this.comprobarEstado()
  }
}
