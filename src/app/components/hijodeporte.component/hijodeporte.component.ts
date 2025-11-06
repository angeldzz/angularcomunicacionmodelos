import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijodeporte',
  standalone: false,
  templateUrl: './hijodeporte.component.html',
  styleUrl: './hijodeporte.component.css',
})
export class HijodeporteComponent {
  @Input() sport!: string;
  @Output() seleccionarFavoritoPadre: EventEmitter<any> = new EventEmitter();

  seleccionarFavoritoHijo():void {
    this.seleccionarFavoritoPadre.emit(this.sport);
  }
}
