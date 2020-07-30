import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { CentroPractica } from '../models/centro-practica';

@Injectable({
  providedIn: 'root'
})
export class CentroPracticaService {

  cpList: AngularFireList<any>;
  selectCentroPractica: CentroPractica=new CentroPractica();

  constructor(private firebase:AngularFireDatabase) { 
    this.getCentroPractica();
  }

  getCentroPractica(){
    return this.cpList=this.firebase.list('CentroPractica')
  }

  insertCentroPractica(CP: CentroPractica){
      this.cpList.push({
      nombre:CP.nombre,
      ruc:CP.ruc,
      email:CP.email,
      numeroTelefonico:CP.numeroTelefonico,
      numeroCelular:CP.numeroCelular,
      giroComercial:CP.giroComercial,
      direccion:CP.direccion,
      referencia:CP.referencia,
      departamento:CP.departamento,
      provincia:CP.provincia,
      distrito:CP.distrito
    });
  }

  deleteCentroPractica($key: string){
    this.cpList.remove($key)
  }

  updateCentroPractica(CP: CentroPractica){
    this.cpList.update(CP.$key,{
      nombre:CP.nombre,
      ruc:CP.ruc,
      email:CP.email,
      numeroTelefonico:CP.numeroTelefonico,
      numeroCelular:CP.numeroCelular,
      giroComercial:CP.giroComercial,
      direccion:CP.direccion,
      referencia:CP.referencia,
      departamento:CP.departamento,
      provincia:CP.provincia,
      distrito:CP.distrito
    });
  }
}
