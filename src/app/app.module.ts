import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './web/home/home.component';
import { LoginComponent } from './web/login/login.component';


import {AngularFireModule} from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { from } from 'rxjs';
import { AdministradorComponent } from './web/administrador/administrador.component';

import { ChartsModule } from 'ng2-charts';
import { ServiciosComponent } from './web/servicios/servicios.component';

import { MatSliderModule } from '@angular/material/slider';
import { SolicitarComponent } from './web/servicios/solicitar/solicitar.component';
import { ProductosComponent } from './web/productos/productos.component';

import { HttpClientModule } from '@angular/common/http';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CatalogoAddComponent } from './catalogo/catalogo-add/catalogo-add.component';
import { CatalogoListComponent } from './catalogo/catalogo-list/catalogo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdministradorComponent,
    ServiciosComponent,
    SolicitarComponent,
    ProductosComponent,
    CatalogoComponent,
    CatalogoAddComponent,
    CatalogoListComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
