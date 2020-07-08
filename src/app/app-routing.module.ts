import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { LoginComponent } from './web/login/login.component';
import { AdministradorComponent } from './web/administrador/administrador.component';
import { AuthGuard } from './guard/auth.guard';
import { ServiciosComponent } from './web/servicios/servicios.component';


const routes: Routes = [
  {path: 'Home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: '', component: LoginComponent},
  {path: 'administrador', component:AdministradorComponent, canActivate:[AuthGuard]},
  {path: 'Servicios', component: ServiciosComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
