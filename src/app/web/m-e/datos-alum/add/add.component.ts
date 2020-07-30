import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlumnoService } from 'src/app/service/alumno.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Alumno } from 'src/app/models/alumno';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output()
  enviar: EventEmitter<string>= new EventEmitter<string>();
  nombreAumno: string;
  apAlumno: string;
  ap2Alumno: string;

  constructor(public alumnoService:AlumnoService,
    private toastr:ToastrService) { }

    botonEnviar(){
      this.enviar.emit(this.nombreAumno +' '+ this.apAlumno+' '+this.ap2Alumno);
    }
ngOnInit(): void {
}

onSubmit(alumnoForm: NgForm){
if(alumnoForm.value.$key==null){
this.alumnoService.insertAlumno(alumnoForm.value);
this.toastr.success('Tu datos se insertaron con exito...');
}else{
this.alumnoService.updateAlumno(alumnoForm.value);
this.toastr.success('Tus datos se actualizaron con exito...');
}
this.resetForm(alumnoForm);
}

resetForm(alumnoForm: NgForm){
if(alumnoForm != null){
alumnoForm.reset();
this.alumnoService.SelectAlumno=new Alumno();
}
}

}
