import { Component, OnInit, Input } from '@angular/core';
import { AlumnoService } from 'src/app/service/alumno.service';
import { SolicitudService } from 'src/app/service/solicitud.service';
import { Alumno } from 'src/app/models/alumno';
import { Solicitud } from 'src/app/models/solicitud';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-newp',
  templateUrl: './newp.component.html',
  styleUrls: ['./newp.component.css']
})
export class NewpComponent implements OnInit {
   public textoPadre:string;
   public textoPadre2:string;
  alumnoRe:Alumno[];

  constructor( private AlumnoService:AlumnoService, public solicitudService:SolicitudService,
    private toastr:ToastrService) { }

  RecibirNombre(mensaje:string){
    this.textoPadre=mensaje;
  }

  RecibirNombre2(mensaje:string){
    this.textoPadre2=mensaje;
  }

  ngOnInit(): void {
    this.AlumnoService.getProductos().snapshotChanges().subscribe(item=>{
      this.alumnoRe=[];
      item.forEach(element => {
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.alumnoRe.push(x as Alumno);
      });
    })
  }


onSubmit(solicitudForm: NgForm){
if(solicitudForm.value.$key==null){
this.solicitudService.insertSolicitud(solicitudForm.value);
this.toastr.success('Tu datos se insertaron con exito...');
}else{
this.solicitudService.updateSolicitud(solicitudForm.value);
this.toastr.success('Tus datos se actualizaron con exito...');
}
this.resetForm(solicitudForm);
}

resetForm(solicitudForm:NgForm){
if(solicitudForm != null){
  solicitudForm.reset();
this.solicitudService.selectSolicitud=new Solicitud();
}
}



}
