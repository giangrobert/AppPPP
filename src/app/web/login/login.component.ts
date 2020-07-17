import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email:string;
  public password:string;


  constructor(public servicio:AuthService, public router:Router , public toastr:ToastrService) { }

  ngOnInit(): void {
  }

  OnLogout(){
    this.servicio.LoginEmail(this.email, this.password).then((ress)=>{
      this.toastr.success('', 'Logeado correctamente!');
      this.router.navigate(['/administrador']);
    }).catch((error)=>{
      this.toastr.error('',"Acceso Denegado");
       console.log(error);
    })
  }

}
