import { Component } from '@angular/core';

import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { tokenReference } from '@angular/compiler';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appVentas';
  isLogin: boolean;
  loginn: boolean;
  public email: string;
  public password: string;

  constructor(private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) {

    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    })
  }
  onLogout() {
    try {
      this.authService.Logout();
      this.router.navigate(['/']);
      this.toastr.info('', "Cerró su cuenta, exitosamente!!!");
    } catch (error) {

    }
  }

}