import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { ListaproductosComponent } from './components/listaproductos.component/listaproductos.component';
import { MenurutasComponent } from './components/menurutas.component/menurutas.component';
import { appRoutingProvider, routing } from './app.routing';

@NgModule({
  declarations: [
    App,
    ListaproductosComponent,
    MenurutasComponent
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
