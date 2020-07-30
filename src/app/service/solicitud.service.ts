import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  solicitudList: AngularFireList<any>;

  selectSolicitud: Solicitud=new Solicitud();

  constructor(private firebase:AngularFireDatabase) { 
    this.  getSolicitud();
  }

  getSolicitud(){
    return this.solicitudList=this.firebase.list('solicitudes')
  }

  insertSolicitud(solicitud: Solicitud){
    this.solicitudList.push({
    estudiante:solicitud.estudiante,
    codigo:solicitud.codigo,
    email:solicitud.email,
    password:solicitud.password,
    Centrpracticas:solicitud.Centrpracticas,
    modalidad:solicitud.modalidad,
    fecha:solicitud.fecha
    });
  }

  deleteSolicitud($key: string){
    this.solicitudList.remove($key)
  }

  updateSolicitud(solicitud: Solicitud){
    this.solicitudList.update(solicitud.$key,{
      estudiante:solicitud.estudiante,
    codigo:solicitud.codigo,
    email:solicitud.email,
    password:solicitud.password,
    Centrpracticas:solicitud.Centrpracticas,
    modalidad:solicitud.modalidad,
    fecha:solicitud.fecha
    });
  }
}
