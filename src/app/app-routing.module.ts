import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { LoginComponent } from './web/login/login.component';
import { AdministradorComponent } from './web/administrador/administrador.component';
import { AuthGuard } from './guard/auth.guard';
import { ProductosComponent } from './web/productos/productos.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { MEComponent } from './web/m-e/m-e.component';
import { DetallesPPPComponent } from './web/m-e/practicas/detalles-ppp/detalles-ppp.component';
import { NuevaPPPComponent } from './web/m-e/practicas/nueva-ppp/nueva-ppp.component';


const routes: Routes = [
  {path: 'Home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: '', component: LoginComponent},
  {path: 'administrador', component:AdministradorComponent, canActivate:[AuthGuard]},
  {path: 'productos', component: ProductosComponent, canActivate:[AuthGuard]},
  {path: 'catalogo', component:CatalogoComponent, canActivate:[AuthGuard]},
  {path: 'me', component: MEComponent, canActivate:[AuthGuard]},
  {path: 'detallesPPP', component: DetallesPPPComponent, canActivate:[AuthGuard]},
  {path: 'nuevoPPP', component: NuevaPPPComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
