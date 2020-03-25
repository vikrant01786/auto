import { Component, OnInit } from '@angular/core';
import { Intimation } from 'src/app/models/intimation';
import { IntimationService } from '../../services/intimation.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-new-intemation',
  templateUrl: './new-intimation.component.html',
  styleUrls: ['./new-intimation.component.css']
})
export class NewIntimationComponent implements OnInit {
  isHide = false;

  constructor(private intimationService: IntimationService, private spinner: NgxSpinnerService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }


  intimation: Intimation = {

    IntimationID: null,
    IntimationStatus: 35,
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


  public intimationid = parseInt(this.route.snapshot.paramMap.get('IntimationID'), 10);
  label = 'Create';
  InsurerName1: any;
  devisionList: any;
  branchList: any;
  InspectionType1: any;
  PaymentMode1: any;
  VehicleType1: any;
  ManufactureYear1: any;
  Intimationstatus1: any;
  RoOffice1: any;
  ManufacturerList: any;
  ModelList: any;
  VariantList: any;
  SurveyorList: any;
  SupportMasterList: any;
  SupportMasterList2: any;
  SupportMasterList3: any;


  ngOnInit() {
  const loggedInuser =  JSON.parse(localStorage.getItem("LoggedINUser"));
  if (loggedInuser.UserName === 'Aggency') {
    this.intimation.AgentName = loggedInuser.Name;
    this.intimation.InsurerName =loggedInuser.InsurerName;
    this.intimation.AgentMobileNo =loggedInuser.MobileNo;
    this.intimation.AgentEmail =loggedInuser.Email;
  }
    // console.log(loggedInuser.UserName , 'loggedInuser');
  if (this.intimationid === 0) {
    this.label = 'Create'; } else {
    this.label = 'Update';
    this.intimationService.getCaseByInitimationID(this.intimationid).subscribe(data => {
      this.intimation = data[0];
     
    }); }

    // alert('I am in right place');

    this.intimationService.getRoofficeList().subscribe(data => {
      this.RoOffice1 = data;

    });

    this.intimationService.getSupportMasterList().subscribe(data => {
      this.SupportMasterList = data;


    });

    this.intimationService.getSupportMaster2List().subscribe(data => {
      this.SupportMasterList2 = data;


    });

    this.intimationService.getSupportMaster3List().subscribe(data => {
      this.SupportMasterList3 = data;


    });


    this.intimationService.getinsurernameList().subscribe(data => {
      this.InsurerName1 = data;

    });



    this.intimationService.getinsspectiontypeList().subscribe(data => {
      this.InspectionType1 = data;

    });

    this.intimationService.getpaymentmodeList().subscribe(data => {
      this.PaymentMode1 = data;

    });

    this.intimationService.getvehicletypeList().subscribe(data => {
      this.VehicleType1 = data;

    });

    this.intimationService.getManufacturerList().subscribe(data => {
      this.ManufacturerList = data;
    });


    this.intimationService.getmanufactureyearList().subscribe(data => {
      this.ManufactureYear1 = data;

    });


    this.intimationService.getintimationstatuslist().subscribe(data => {
      this.Intimationstatus1 = data;

    });

    this.intimationService.getSurveyorlist().subscribe(data => {
      this.SurveyorList = data;

    });



  }


  // Reference table  all functions

  getDevisionList(ReferenceNo) {
    this.intimationService.getSupportMaster3Data(ReferenceNo, 'DivisionName').subscribe(data => {
      this.devisionList = data;
    });
  }

  getBranchList(ReferenceNo) {
    this.intimationService.getSupportMaster3Data(ReferenceNo, 'BranchName').subscribe(data => {
      this.branchList = data;
    });
  }




  getModelList(ReferenceNo) {
    this.intimationService.getSupportMaster2Data(ReferenceNo, 'Model').subscribe(data => {
      this.ModelList = data;
    });
  }

  getVarientList(ReferenceNo) {
    this.intimationService.getSupportMaster2Data(ReferenceNo, 'Variant').subscribe(data => {
      this.VariantList = data;
    });
  }

  // finish references functions

  saveIntimation(): void {
    //  this.spinner.show();
    this.intimationService.saveIntimation(this.intimation).subscribe(
      (data: Intimation) => {
        this.intimation = data[0];
        // this.spinner.hide();
        this.showSuccess( 'Intimation ID: ' + data[0].IntimationID + ' saved successfully', 'Intimation Saved');
      }, (err) => {
        // this.spinner.hide();
        console.log(err);
        this.showFailure(err, 'Error Saving Intimation Data.');
      }
    );
  }


  showSuccess(display, Message) {
    this.toastrService.success(display, Message);
  }

  showFailure(error, Message) {
    this.toastrService.error(error, Message);
  }



  showhide() {
    if (this.isHide === false) {
      this.isHide = true;
    } else {
      this.isHide = false;
    }

  }



  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
