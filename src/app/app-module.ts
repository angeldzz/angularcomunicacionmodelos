import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { ListaproductosComponent } from './components/listaproductos.component/listaproductos.component';
import { MenurutasComponent } from './components/menurutas.component/menurutas.component';
import { appRoutingProvider, routing } from './app.routing';
import { PadreCochesComponent } from './components/padre-coches.component/padre-coches.component';
import { HijoCocheComponent } from './components/hijo-coche.component/hijo-coche.component';
import { PadredeportesComponent } from './components/padredeportes.component/padredeportes.component';
import { HijodeporteComponent } from './components/hijodeporte.component/hijodeporte.component';
import { ComicComponent } from './components/comic.component/comic.component';
import { LibreriaComponent } from './components/libreria.component/libreria.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    ListaproductosComponent,
    MenurutasComponent,
    PadreCochesComponent,
    HijoCocheComponent,
    PadredeportesComponent,
    HijodeporteComponent,
    ComicComponent,
    LibreriaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
