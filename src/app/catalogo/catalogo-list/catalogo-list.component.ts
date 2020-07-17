import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Catalogo } from 'src/app/models/catalogo';
import { CatalogoService } from 'src/app/service/catalogo.service';

@Component({
  selector: 'app-catalogo-list',
  templateUrl: './catalogo-list.component.html',
  styleUrls: ['./catalogo-list.component.css']
})
export class CatalogoListComponent implements OnInit {

  catalogoList:Catalogo[];

  constructor(private catalogoService:CatalogoService, private tostr:ToastrService) { }

  ngOnInit(): void {
    this.catalogoService.getProductos().snapshotChanges().subscribe(item=>{
      this.catalogoList=[];
      item.forEach(element => {
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.catalogoList.push(x as Catalogo);
      });
      console.log(this.catalogoList)
    })
  }
  onDelete($key:string){
    if(confirm("Estas seguro que vas a eliminar este producto?")){
      this.catalogoService.deleteProducto($key)
      this.tostr.warning("El producto se ha eliminado...")
    }
  }

  onEdit(producto:Catalogo){
    this.catalogoService.selectProducto=Object.assign({},producto);
  }

}
