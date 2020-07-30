import { Component, OnInit } from '@angular/core';
import { CentroPractica } from 'src/app/models/centro-practica';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CentroPracticaService } from 'src/app/service/centro-practica.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-almacen-cp',
  templateUrl: './almacen-cp.component.html',
  styleUrls: ['./almacen-cp.component.css']
})
export class AlmacenCpComponent implements OnInit {

  CPList:CentroPractica[];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private CPService:CentroPracticaService, private tostr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      retrieve: true
    };

    this.CPService.getCentroPractica().snapshotChanges().subscribe(item=>{
      this.CPList=[];
      item.forEach(element => {
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.CPList.push(x as CentroPractica);
      });
      this.dtTrigger.next();
    })
  }
  onDelete($key:string){
    if(confirm("Estas seguro que vas a eliminar este producto?")){
      this.CPService.deleteCentroPractica($key)
      this.tostr.warning("El producto se ha eliminado...")
    }
  }

  onEdit(CP:CentroPractica){
    this.CPService.selectCentroPractica=Object.assign({},CP);
  }


  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }
}
