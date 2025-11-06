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

@NgModule({
  declarations: [
    App,
    ListaproductosComponent,
    MenurutasComponent,
    PadreCochesComponent,
    HijoCocheComponent,
    PadredeportesComponent,
    HijodeporteComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
