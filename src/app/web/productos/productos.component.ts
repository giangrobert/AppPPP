import { Component, OnInit } from '@angular/core';
import { RestService } from '../../service/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogoService } from 'src/app/service/catalogo.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  constructor(public catalogoService:CatalogoService) {
   }

  ngOnInit(): void {
  }

}
