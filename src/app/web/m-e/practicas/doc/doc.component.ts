import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/service/solicitud.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  solicitudList:Solicitud[];

  constructor(private solicitudService:SolicitudService, private tostr:ToastrService) { }

  ngOnInit(): void {
    this.solicitudService.getSolicitud().snapshotChanges().subscribe(item=>{
      this.solicitudList=[];
      item.forEach(element => {
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.solicitudList.push(x as Solicitud);
      });
    })
  }
  onDelete($key:string){
    if(confirm("Estas seguro que vas a eliminar esta soicitud?")){
      this.solicitudService.deleteSolicitud($key)
      this.tostr.warning("Esta solicitud se ha eliminado...")
    }
  }

  onEdit(solicitud:Solicitud){
    this.solicitudService.selectSolicitud=Object.assign({},solicitud);
  }
}
