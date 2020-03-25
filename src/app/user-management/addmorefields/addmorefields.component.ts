import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner'
@Component({
  selector: 'app-addmorefields',
  templateUrl: './addmorefields.component.html',
  styleUrls: ['./addmorefields.component.css']
})
export class AddmorefieldsComponent implements OnInit {
  dtOptions: any = {};
  dtTrigger: Subject<AddmorefieldsComponent> = new Subject()
  constructor(private adminService: AdminService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastrService: ToastrService,
    private route: ActivatedRoute) { }

    manufactureYear: any = {
      TableName: 'ManufactureYear',
      Name: null,
      ReferenceNo: 0,
    };
    manufacturer = {
      TableName: 'Manufacturer',
      Name: null,
      ReferenceNo: null,
    };

    model = {
      TableName: 'Model',
      Name: null,
      ReferenceNo: null,
    };
    variant = {
      TableName: 'Variant',
      Name: null,
      ReferenceNo: null,
    };

    ManufactureYearList: any;
    ManufacturerList: any;
    ModelList:any;
    VariantList:any;
    supportList = [];
    ngOnInit() {

      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 1000,
        colReorder: true,
        scrollY: 300,
        dom: 'Bfrtip',
  
      buttons: [
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
    this.getManufactureyearList();
    this. getSupportMaster2AllData();
  }

  getManufactureyearList() {
    this.adminService.getManufactureYearList().subscribe(data => {
      this.ManufactureYearList = data;
      //  console.log(data, 'abc');
    });
  }

  getSupportMaster2AllData() {
    this.adminService.getSupportMaster2AllData().subscribe(data => {
      this.supportList = data;
      this.dtTrigger.next();
      console.log(data, 'sp2data');
    });
  }
  
  
  getManufacturerList(ReferenceNo) {
    this.adminService.getSupportMaster2Data(ReferenceNo, 'Manufacturer').subscribe(data => {
      this.ManufacturerList = data;
       console.log(data, 'abc');
    });
  }
 
  getModelList(ReferenceNo) {
    this.adminService.getSupportMaster2Data(ReferenceNo, 'Model').subscribe(data => {
      this.ModelList = data;
      // console.log(data, 'abc');
    });
  }
 
  getVariantList(ReferenceNo) {
    this.adminService.getSupportMaster2Data(ReferenceNo, 'Variant').subscribe(data => {
      this.VariantList = data;
      // console.log(data, 'abc');
    });
  }
 

  saveManufactureyear() {
    // console.log(this.insurerName, 'insurewer');
    this.adminService.saveSupportMaster2(this.manufactureYear).subscribe(data => {
      this.getManufactureyearList();
    }, (err) => {
      console.log(err, 'error');
    });
  }


  saveManufacturer() {
    this.manufacturer.ReferenceNo = this.manufactureYear.Name;
    //  console.log(this.manufacturer, 'manufacturer');
    this.adminService.saveSupportMaster2(this.manufacturer).subscribe(data => {
      console.log(this.manufacturer);
    }, (err) => {
      console.log(err, 'error');
    });
  }

  
  saveModel() {
    this.model.ReferenceNo = this.manufacturer.Name;
    //  console.log(this.model, 'model');
    this.adminService.saveSupportMaster2(this.model).subscribe(data => {
      console.log(this.model);
    }, (err) => {
      console.log(err, 'error');
    });
  }

  
  saveVariant() {
    this.model.ReferenceNo = this.model.Name;
    //  console.log(this.variant, 'variant');
    this.adminService.saveSupportMaster2(this.variant).subscribe(data => {
      console.log(this.variant);
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