import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './web/login/login.component';


import {AngularFireModule} from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { from } from 'rxjs';

import { ChartsModule } from 'ng2-charts';

import { MatSliderModule } from '@angular/material/slider';

import { HttpClientModule } from '@angular/common/http';


import { DataTablesModule } from 'angular-datatables';
import { MEComponent } from './web/m-e/m-e.component';
import { PracticasComponent } from './web/m-e/practicas/practicas.component';
import { HorasComponent } from './web/m-e/horas/horas.component';
import { ResumenComponent } from './web/m-e/resumen/resumen.component';
import { DetallesPPPComponent } from './web/m-e/practicas/detalles-ppp/detalles-ppp.component';
import { DocComponent } from './web/m-e/practicas/doc/doc.component';
import { NuevaPPPComponent } from './web/m-e/practicas/nueva-ppp/nueva-ppp.component';
import { NewpComponent } from './web/m-e/practicas/nueva-ppp/newp/newp.component';
import { DatosAlumComponent } from './web/m-e/datos-alum/datos-alum.component';
import { DatosCpComponent } from './web/m-e/datos-cp/datos-cp.component';
import { AlmacenCpComponent } from './web/m-e/datos-cp/almacen-cp/almacen-cp.component';
import { AddComponent } from './web/m-e/datos-alum/add/add.component';
import { CpAddComponent } from './web/m-e/datos-cp/cp-add/cp-add.component';
import { SolicitudGeneradaComponent } from './web/m-e/practicas/solicitud-generada/solicitud-generada.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MEComponent,
    PracticasComponent,
    HorasComponent,
    ResumenComponent,
    DetallesPPPComponent,
    DocComponent,
    NuevaPPPComponent,
    NewpComponent,
    DatosAlumComponent,
    DatosCpComponent,
    AlmacenCpComponent,
    AddComponent,
    CpAddComponent,
    SolicitudGeneradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ChartsModule,
    MatSliderModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
