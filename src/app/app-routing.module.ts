import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './web/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { MEComponent } from './web/m-e/m-e.component';
import { DetallesPPPComponent } from './web/m-e/practicas/detalles-ppp/detalles-ppp.component';
import { NuevaPPPComponent } from './web/m-e/practicas/nueva-ppp/nueva-ppp.component';
import { SolicitudGeneradaComponent } from './web/m-e/practicas/solicitud-generada/solicitud-generada.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'me', component: MEComponent, canActivate:[AuthGuard]},
  {path: 'detallesPPP', component: DetallesPPPComponent, canActivate:[AuthGuard]},
  {path: 'nuevoPPP', component: NuevaPPPComponent, canActivate:[AuthGuard]},
  {path: 'SolicitudGenerada', component: SolicitudGeneradaComponent, canActivate:[AuthGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
