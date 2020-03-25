import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  dtOptions: any = {};
  dtTrigger: Subject<AdministrationComponent> = new Subject();
  constructor(private adminService: AdminService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastrService: ToastrService,
    private route: ActivatedRoute) { }

  insurerName: any = {
    TableName: 'InsurerName',
    Name: null,
    ReferenceNo: 0,
  };
  divisionName = {
    TableName: 'DivisionName',
    Name: null,
    ReferenceNo: null,
  };
  branchName: any = {
    TableName: 'BranchName',
    Name: null,
    ReferenceNo: null,
  };

  InsurerNameList: any;
  devisionList: any;
  branchList: any;
  suppoerList = [];


  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 1000,
      colReorder: true,
      scrollY: 300,
      dom: 'Bfrtip',

      buttons: [
        // 'columnsToggle', // enable this if you want all the fields buttons to display
        'colvis',
        'copy',
        'print',
        'excel',
        'csv',
        'pdf'
      ],
      select: true,
      responsive: true,
      retrieve: true
    };
    this.getinsurereNameList();
    this.getSupportMaster3AllData();

  }

  getinsurereNameList() {
    this.adminService.getinsurernameList().subscribe(data => {
      this.InsurerNameList = data;
      // console.log(data, 'insurer');
    });
  }
  getSupportMaster3AllData() {
    this.adminService.getSupportMaster3AllData().subscribe(data => {
      this.suppoerList = data;
      this.dtTrigger.next();
      console.log(data, 'sp3data');
    });
  }

  getDevisionList(ReferenceNo) {
    this.adminService.getSupportMaster3Data(ReferenceNo, 'DivisionName').subscribe(data => {
      this.devisionList = data;
    });
  }

  getBranchList(ReferenceNo) {
    this.adminService.getSupportMaster3Data(ReferenceNo, 'BranchName').subscribe(data => {
      this.branchList = data;
    });
  }

  saveInsurer() {
    // console.log(this.insurerName, 'insurewer');
    this.adminService.saveSupportMaster3(this.insurerName).subscribe(data => {
      this.getinsurereNameList();
    }, (err) => {
      console.log(err, 'error');
    });
  }

  saveDivision() {
    this.divisionName.ReferenceNo = this.insurerName.Name;
    // console.log(this.divisionName, 'divisionName');
    this.adminService.saveSupportMaster3(this.divisionName).subscribe(data => {
      console.log(this.divisionName);
    }, (err) => {
      console.log(err, 'error');
    });
  }

  saveBranch() {
    this.branchName.ReferenceNo = this.divisionName.Name;
    // console.log(this.branchName, 'branchname');
    this.adminService.saveSupportMaster3(this.branchName).subscribe(data => {
    }, (err) => {
      console.log(err, 'error');
    });
  }


  showSuccess(display, Message) {
    this.toastrService.success(display, Message);
  }

  showFailure(error, Message) {
    this.toastrService.error(error, Message);
  }



}
