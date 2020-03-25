import { Component, OnInit } from '@angular/core';
// import { NgxSpinnerService } from 'ngx-spinner';
import { Intimation } from 'src/app/models/intimation';
import { Subject } from 'rxjs';
import { IntimationService } from '../../services/intimation.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css'],
  preserveWhitespaces: true
})
export class CaseListComponent implements OnInit {
  isHide = false;

  env = environment;
  private url1 = this.env.apiUrl + 'email/'
  QcIcons = false;
  QcHoldIcons = false;
  Cancelled = false;
  Completed = false;
  FreshCaseList = false;
  ScheduledList = false;
  ReportUploaded = false;
  user = {
    Id: null,
    ROOffice: '',
    Remarks: ''
  };
  dtOptions: any = {};
  dtTrigger: Subject<CaseListComponent> = new Subject();

  constructor(
    private toastrService: ToastrService,
    private intimationService: IntimationService,
    private http: HttpClient,
    private router: Router) { }

  selectedIntimation = {
    IntimationID: null,
    InsurerNameDes: null,
    ManufacturerDes: null,
    IntimationStatusDes: null,
    DivisionDes: null,
    IntimationStatus: null,
    AgentMobileNo: null,
    AgentCode: null,
    AgentName: null,
    AgentEmail: null,
    ROOffice: null,
    InsurerName: null,
    DivisionName: null,
    BranchName: null,
    InsurerRefNo: null,
    InsuredAddress: null,
    ContactPersonMobileNo: null,
    ManufactureYear: null,
    VehicleType: null,
    Model: null,
    StartingLocationFrom: null,
    InspectionLocationTo: null,
    Kgm: null,
    Remarks: null,
    Pincode: null,
    InsuredName: null,
    InsuredMobileNo: null,
    VehicleRegistrationNo: null,
    InspectionType: null,
    Manufacturer: null,
    Variant: null,
    PaymentMode: null,
    IntimationDate: null,
    CCE: null,
    Surveyor: null,
    QCHoldReason: null,
    StepStatus: null,
    IntimationRemark: null,
    ExtraKm: null,
    AppointmentOn: null,
    FourWheelerType: null,
    EngineNo: null,
    ChassisNo: null,
    UpdateStatus: null,
    ExtraKillometer: null,
    ManualReportNo: null,
    UnderTakingSlipNo: null,
    ReceiptNo: null,
    VehicleLocation: null,
    CngLpgFitted: null,
    CngLpgEndorsdinRC: null,
    FrontNoPlate: null,
    RearNoPlate: null,
    FrontBumper: null,
    Grill: null,
    HeadLampLT: null,
    HeadLampRT: null,
    IndicatorLightLT: null,
    IndicatorLightRT: null,
    FogLampLT: null,
    FogLampRT: null,
    FrontPanel: null,
    Bonnet: null,
    LeftApron: null,
    RightApron: null,
    LTFrontFender: null,
    LTFrontDoor: null,
    LTRearDoor: null,
    LTPillarDoorA: null,
    LTPillarCenterB: null,
    LTPillarRearC: null,
    LTRunningBoard: null,
    LTQtrPanel: null,
    Dicky: null,
    RearBumper: null,
    TailLampLT: null,
    TailLampRT: null,
    RTQtrPanel: null,
    RTRearDoor: null,
    RTFrontDoor: null,
    RTPillarFrontA: null,
    RTCenterPillarB: null,
    RTPillarRearC: null,
    RTRunningBoard: null,
    RTFrontFender: null,
    FloorSilencer: null,
    UnderCarriage: null,
    RearViewMirrorLT: null,
    RearViewMirrorRT: null,
    Rim: null,
    Colour: null,
    RCVerified: null,
    FuelUsed: null,
    StereoMake: null,
    CDChangerMake: null,
    AnyOther: null,
    SeatCovers: null,
    CentreLock: null,
    GearLocking: null,
    FrontwsGlassLaminated: null,
    LeftFrontDoorGlass: null,
    LeftRearDoorGlass: null,
    RightFrontDoorGlass: null,
    RightRearDoorGlass: null,
    BackGlass: null,
    Tyres: null,
    RHFrontTyreMake: null,
    RHFrontTyreDOTNo: null,
    RHRearTyreMake: null,
    RHRearTyreDOTNo: null,
    LHFrontTyreMake: null,
    LHFrontTyreDOTNo: null,
    LHRearTyreMake: null,
    LHRearTyreDOTNo: null,
    StepneyTypeMake: null,
    StepneyTypeDOTNo: null,
    Marketvalue: null,
    InspectionDateRecommandedOn: null,
    Cowl: null,
    DashBoard: null,
    LeftMudgaurd: null,
    RightMudgaurd: null,
    Cabin: null,
    CabinLeftDoor: null,
    CabinRightDoor: null,
    LeftSideBody: null,
    RightSideBody: null,
    FrontBody: null,
    RearBody: null,
    WindowGlassesLS: null,
    WindowGlassesRS: null,
    ExcavatorCabinGlass: null,
    CraneCabinGlass: null,
    FrontExcavator: null,
    CraneBucket: null,
    CraneHook: null,
    Boom: null,
    Ac: null,
    Fans: null,
    HydraulicSystem: null,
    ChassisFrame: null,
    FuelTank: null,
    Seats: null,
    Stepny: null,
    ChassisProductionNo: null,
    TypeofBody: null,
    ExtraFittingsRemarks: null,
    VehicleRemarks: null,
    QCRemarks: null,
    SurveyCompletedOn: null,
    Status: null,
    CreatedOn: null,
    UpdatedOn: null,
    CreatedBy: null,
    UpdatedBy: null,
  };

  UserIntimations: any;
  RoOffice1: any;
  Remarks: any;
  selectedTab: any;
  InsurerRefNo: any;
  InsurerNameDes: any;
  DivisionDes: any;
  IntimationDate: any;
  ContactPersonMobileNo: any;
  InsuredName: any;
  VehicleRegistrationNo: any;
  EngineNo: any;
  ChassisNo: any;
  ManufacturerDes: any;
  IntimationStatusDes: any;
  loggedInuser: any;
  ngOnInit() {

    this.loggedInuser = JSON.parse(localStorage.getItem("LoggedINUser"));



    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      colReorder: true,
      dom: 'Bfrtip',
      // scrollY: 200,

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

    this.getCaseList('FreshCaseList');


    this.intimationService.getRoofficeList().subscribe(data => {
      this.RoOffice1 = data;
      this.dtTrigger.next();
    });


  }

  selectCase(int) {
    console.log(int);
    this.selectedIntimation = Object.assign(int);
    console.log(this.selectedIntimation);
  }

  saveIntimation(): void {
    // this.spinner.show();
    this.intimationService.saveIntimation(this.selectedIntimation).subscribe(
      (data: Intimation) => {
        // this.spinner.hide();
        this.showSuccess('Intimation ID: ' + data[0].IntimationID + ' updated successfully', 'Intimation Updated');
      }, (err) => {
        // this.spinner.hide();
        console.log(err);
        this.showFailure(err, 'Error Updating Intimation Data.');
      }
    );
  }

  sendUserintimationDetailsToModalPop(UserIntimation) {
    console.log(UserIntimation, 'intimation');
    this.InsurerRefNo = UserIntimation.InsurerRefNo;
    this.InsurerNameDes = UserIntimation.InsurerNameDes;
    this.DivisionDes = UserIntimation.DivisionDes;
    this.IntimationDate = UserIntimation.IntimationDate;
    this.ContactPersonMobileNo = UserIntimation.ContactPersonMobileNo;
    this.InsuredName = UserIntimation.InsuredName;
    this.VehicleRegistrationNo = UserIntimation.VehicleRegistrationNo;
    this.EngineNo = UserIntimation.EngineNo;
    this.ChassisNo = UserIntimation.ChassisNo;
    this.ManufacturerDes = UserIntimation.ManufacturerDes;
    this.IntimationStatusDes = UserIntimation.IntimationStatusDes;
    this.Remarks = UserIntimation.Remarks;
  }

  SendEmail(Email, MailContent) {
    const Mail = {
      Email: Email,
      MailContent: MailContent
    };
    console.log(Mail, 'Email Form Submission');
    this.http.post<any>(this.url1, Mail).subscribe(data => {
      this.showSuccess('Email Sent', 'Email Is Been Sent Successfully')
    });
  }




  showSuccess(display, Message) {
    this.toastrService.success(display, Message);
  }

  showFailure(error, Message) {
    this.toastrService.error(error, Message);
  }

  getCaseList(status) {
    this.IconShows(status);
    // this.spinner.show();
    this.selectedTab = status;
    this.intimationService.getCaseList(status).subscribe(data => {
      this.UserIntimations = data;
      console.log(this.UserIntimations, 'UserIntimations');
      this.dtTrigger.next();
      // this.spinner.hide();
    });
  }

  IconShows(status) {
    if (status === 'QC') {
      this.QcIcons = true; this.QcHoldIcons = false; this.Cancelled = false; this.Completed = false; this.FreshCaseList = false;
      this.ScheduledList = false; this.ReportUploaded = false;
    } else if (status === 'QCHold') {
      this.QcHoldIcons = true; this.QcIcons = false; this.Cancelled = false; this.Completed = false; this.FreshCaseList = false;
      this.ScheduledList = false; this.ReportUploaded = false;
    } else if (status === 'Cancelled') {
      this.QcHoldIcons = false; this.QcIcons = false; this.Cancelled = true; this.Completed = false; this.FreshCaseList = false;
      this.ScheduledList = false; this.ReportUploaded = false;
    } else if (status === 'Completed') {
      this.QcHoldIcons = false; this.QcIcons = false; this.Cancelled = false; this.Completed = true; this.FreshCaseList = false;
      this.ScheduledList = false; this.ReportUploaded = false;
    } else if (status === 'FreshCaseList') {
      this.QcHoldIcons = false; this.QcIcons = false; this.Cancelled = false; this.Completed = false; this.FreshCaseList = true;
      this.ScheduledList = false; this.ReportUploaded = false;
    } else if (status === 'ScheduledList') {
      this.QcHoldIcons = false; this.QcIcons = false; this.Cancelled = false; this.Completed = false; this.FreshCaseList = false;
      this.ScheduledList = true; this.ReportUploaded = false;
    } else if (status === 'ReportUploaded') {
      this.QcHoldIcons = false; this.QcIcons = false; this.Cancelled = false; this.Completed = false; this.FreshCaseList = false;
      this.ScheduledList = false; this.ReportUploaded = true;
    }
  }


  // showhide() {
  //   if (this.isHide === false) {
  //     this.isHide = true;
  //   } else {
  //     this.isHide = false;
  //   }
  //  }



  // deleteCases(IntimationID) {
  //   this.IntimationService.deleteCases(IntimationID).subscribe((response) => {

  // });
  // this.ngOnInit();
  // this.showSuccess('Case Deleted', 'Case deleted successfullyu');

  // }


}
