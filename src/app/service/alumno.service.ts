import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  alumnoList: AngularFireList<any>;
  SelectAlumno: Alumno=new Alumno();

  constructor(private firebase:AngularFireDatabase) { 
    this.getProductos();
  }

  getProductos(){
    return this.alumnoList=this.firebase.list('Alumno')
  }

  insertAlumno(alumno: Alumno){
    this.alumnoList.push({
      nombres: alumno.nombres,
      apPaterno:alumno.apPaterno,
      apMaterno:alumno.apMaterno,
      dni:alumno.dni,
      estadoCivil:alumno.estadoCivil,
      numeroCelular:alumno.numeroCelular,
      departamento:alumno.departamento,
      provincia:alumno.provincia,
      distrito:alumno.distrito,
      direccion:alumno.direccion,
      referencia:alumno.referencia
    });
  }

  deleteAlumno($key: string){
    this.alumnoList.remove($key)
  }

  updateAlumno(alumno: Alumno){
    this.alumnoList.update(alumno.$key,{
      nnombres: alumno.nombres,
      apPaterno:alumno.apPaterno,
      apMaterno:alumno.apMaterno,
      dni:alumno.dni,
      estadoCivil:alumno.estadoCivil,
      numeroCelular:alumno.numeroCelular,
      departamento:alumno.departamento,
      provincia:alumno.provincia,
      distrito:alumno.distrito,
      direccion:alumno.direccion,
      referencia:alumno.referencia
    });
  }
}