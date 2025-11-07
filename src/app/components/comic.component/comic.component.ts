import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic',
  standalone: false,
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.css',
})
export class ComicComponent {
    @Input() comic!: Comic;
    @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter<any>();

    marcarFavorito():void{
      this.seleccionarFavorito.emit(this.comic);
    }
    constructor(){
  }
}
