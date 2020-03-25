import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import {TranslateService} from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
              private router: Router,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private spinner: NgxSpinnerService,
              public translate: TranslateService,
              private toastrService: ToastrService) {

    }

    loginUser: any = { userEmail: '', userPassword: ''};
    lang: any;
    x: any;

  ngOnInit() {
  }

  validateUser(event) {
    this.loginService.validateUser(this.loginUser)
     .subscribe( (data: User) => {

     if ( data[0]) {
       localStorage.setItem('LoggedINUser', JSON.stringify(data[0]));
       window.localStorage.setItem('isLoggedIn', 'true' );
       this.showSuccess(data[0].Name, 'has been logged in successfully', data[0].Name, 'Login');

       this.router.navigate(['/Dashboard/dashboard']);
     } else {
       this.showFailure( 'Username or Password mismatch.' , 'Login failed');
     }
     },
       (err) => {
         console.log(err);
         this.showFailure(err, 'Login failed. Please contact Administrator');
         this.router.navigate(['/']);
       });
   }

   showSuccess(user, display, role, Message) {
    display = user + ' ' + display;
    Message = role + ' ' + Message;
    this.toastrService.success(display , Message );
  }

  showFailure(error, Message) {
    this.toastrService.error(error, Message);
  }

}
