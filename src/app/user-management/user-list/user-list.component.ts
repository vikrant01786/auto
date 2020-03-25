import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  dtOptions: any = {};
  dtTrigger: Subject<UserListComponent> = new Subject();

  constructor(private userService: UserService,
              private router: Router,
              private toastrService: ToastrService,
              private route: ActivatedRoute) { }

  users: any;

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      colReorder: true,
      dom: 'Bfrtip',

    buttons: [

      'colvis',
      'copy',
      'print',
      'excel',
      'csv'
    ],
    select: true,
    responsive: true,
    retrieve: true
  };

    this.userService.getUserList().subscribe(data => {
      this.users = data;

      this.dtTrigger.next();
    });
  }


  // delete userfuction
  deleteUser(id) {
    this.userService.deleteUserList(id).subscribe((response) => {

  });
  this.ngOnInit();
  this.showSuccess('user Deleted', 'user deleted successfullyu');

}

showSuccess(display, Message) {
  this.toastrService.success(display, Message);
}
}

