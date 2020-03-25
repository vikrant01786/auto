import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import { UserService } from '../../services/user.service';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  dtOptions: any = {};
  dtTrigger: Subject<AdminComponent> = new Subject();
  env = environment;
  private _url1 = this.env.apiUrl + 'file/';

  constructor(private userService: UserService,
    private toastrService: ToastrService,
    private router: Router,
    private httpClient: HttpClient,
    private route: ActivatedRoute ) { }

    user: User = {
    UserId: null,
    Name: null,
    Address: null,
    MobileNo: null,
    AlternateNo: null,
    Email: null,
    Password: null,
    UserRole: null,
    ProfilePicture: null,
    InsurerName: null,
    Status: null,
    };

  public userid =  parseInt(this.route.snapshot.paramMap.get('UserID'), 10);

  label = 'Save';
  InsurerName1: any;
  UserRole1: any;


  ngOnInit() {

    if (this.userid !== 0) {
      this.userService.getUserByID(this.userid).subscribe(data => {
        this.user = data[0]; this.label = 'update';
        this.showSuccess(this.user.Name + '' + this.user.Name, 'data loaded for user');
      }, (err) => {console.log(err);
      this.showFailure(err, 'error loading user data');
    });
    } else {
      this.router.navigate['user-management/user/0'];
    }

    this.userService.getinsurernameList().subscribe(data => {
      this.InsurerName1 = data;
      this.dtTrigger.next();
    });

    this.userService.getuserroleList().subscribe(data => {
      this.UserRole1 = data;
      this.dtTrigger.next();
    });


  }

   saveUser(): void {
     if (this.userid === 0) {
     this.userService.saveUser( this.user).subscribe(
    (data: User) => {

    this.ngOnInit();
    this.showSuccess('user data saved', ' user information saved successfully');
    // this.router.navigate(['/user-management/admin']);

    }, (err) => {
    console.log(err);
    this.showFailure(err, 'Error Saving user Data.');
    }
    );
  } else {
    this.userService.updateUser( this.user).subscribe(
      (data: User) => {

      this.ngOnInit();
      this.showSuccess('user data saved', ' user information saved successfully');
      this.router.navigate(['/user-management/user-list']);

      }, (err) => {
      console.log(err);
      this.showFailure(err, 'Error Saving user Data.');
      }
      );
  }


}

showSuccess(display, Message) {
  this.toastrService.success(display, Message);
  }

  showFailure(error, Message) {
  this.toastrService.error(error, Message);
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
    event.preventDefault();
    }
    }

    uploadFile(event) {
      if (event.target.files.length > 0 ) {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        this.httpClient.post<any>(this._url1 , formData).subscribe(
          (res) => { console.log(res);
            this.user.ProfilePicture = res.filename;
            this.ngOnInit();
          }
          ,
          (err) => console.log(err)
        );
      }
      }

}
