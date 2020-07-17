import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CatalogoService } from '../../service/catalogo.service';
import { ToastrService } from 'ngx-toastr';
import { Catalogo } from 'src/app/models/catalogo';

@Component({
  selector: 'app-catalogo-add',
  templateUrl: './catalogo-add.component.html',
  styleUrls: ['./catalogo-add.component.css']
})
export class CatalogoAddComponent implements OnInit {
  constructor(public catalogoService:CatalogoService,
              private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(productosForm: NgForm){
    if(productosForm.value.$key==null){
      this.catalogoService.insertProducto(productosForm.value);
      this.toastr.success('El producto se inserto con exito...');
    }else{
      this.catalogoService.updateProducto(productosForm.value);
      this.toastr.success('El producto se actualizó con exito...');
    }
    this.resetForm(productosForm);
  }

  resetForm(productosForm: NgForm){
    if(productosForm != null){
      productosForm.reset();
      this.catalogoService.selectProducto=new Catalogo();
    }
  }
}
