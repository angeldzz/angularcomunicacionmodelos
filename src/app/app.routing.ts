import { RouterModule, Routes } from "@angular/router";
import { ListaproductosComponent } from "./components/listaproductos.component/listaproductos.component";
import { ModuleWithProviders } from "@angular/core";

const appRoutes:Routes = [
    {path:"listaProductos",component:ListaproductosComponent}
]
export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes)