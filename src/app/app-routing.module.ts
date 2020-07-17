import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { LoginComponent } from './web/login/login.component';
import { AdministradorComponent } from './web/administrador/administrador.component';
import { AuthGuard } from './guard/auth.guard';
import { ServiciosComponent } from './web/servicios/servicios.component';
import { SolicitarComponent } from './web/servicios/solicitar/solicitar.component';
import { ProductosComponent } from './web/productos/productos.component';
import { CatalogoComponent } from './catalogo/catalogo.component';


const routes: Routes = [
  {path: 'Home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: '', component: LoginComponent},
  {path: 'administrador', component:AdministradorComponent, canActivate:[AuthGuard]},
  {path: 'Servicios', component: ServiciosComponent, canActivate:[AuthGuard]},
  {path: 'solicitar', component: SolicitarComponent, canActivate:[AuthGuard]},
  {path: 'productos', component: ProductosComponent, canActivate:[AuthGuard]},
  {path: 'catalogo', component:CatalogoComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
