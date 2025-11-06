import { RouterModule, Routes } from "@angular/router";
import { ListaproductosComponent } from "./components/listaproductos.component/listaproductos.component";
import { ModuleWithProviders } from "@angular/core";
import { PadreCochesComponent } from "./components/padre-coches.component/padre-coches.component";

const appRoutes:Routes = [
    {path:"listaProductos",component:ListaproductosComponent},
    {path:"padreCoches",component:PadreCochesComponent},
]
export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes)