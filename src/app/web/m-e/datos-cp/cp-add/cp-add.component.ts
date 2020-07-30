import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CentroPracticaService } from 'src/app/service/centro-practica.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { CentroPractica } from 'src/app/models/centro-practica';


@Component({
  selector: 'app-cp-add',
  templateUrl: './cp-add.component.html',
  styleUrls: ['./cp-add.component.css']
})
export class CpAddComponent implements OnInit {
  @Output()
  enviar2: EventEmitter<string>= new EventEmitter<string>();
  nombre: string;
  ruc:string;

  constructor(public CPService:CentroPracticaService,
    private toastr:ToastrService) { }

    botonEnviar(){
      this.enviar2.emit(this.nombre+' '+this.ruc);
    }

ngOnInit(): void {
}

onSubmit(CPForm: NgForm){
if(CPForm.value.$key==null){
this.CPService.insertCentroPractica(CPForm.value);
this.toastr.success('El centro de práctica se inserto con exito...');
}else{
this.CPService.updateCentroPractica(CPForm.value);
this.toastr.success('El centro de práctica se actualizó con exito...');
}
this.resetForm(CPForm);
}

resetForm(productosForm: NgForm){
if(productosForm != null){
productosForm.reset();
this.CPService.selectCentroPractica=new CentroPractica();
}
}

}
