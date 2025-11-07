import { RouterModule, Routes } from "@angular/router";
import { ListaproductosComponent } from "./components/listaproductos.component/listaproductos.component";
import { ModuleWithProviders } from "@angular/core";
import { PadreCochesComponent } from "./components/padre-coches.component/padre-coches.component";
import { PadredeportesComponent } from "./components/padredeportes.component/padredeportes.component";
import { LibreriaComponent } from "./components/libreria.component/libreria.component";

const appRoutes:Routes = [
    {path:"listaProductos",component:ListaproductosComponent},
    {path:"padreCoches",component:PadreCochesComponent},
    {path:"padreDeportes",component:PadredeportesComponent},
    {path:"comics",component:LibreriaComponent},
]
export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes)