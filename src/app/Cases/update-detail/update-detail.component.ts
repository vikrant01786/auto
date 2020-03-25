import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { IntimationService } from '../../services/intimation.service';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

declare var $: any;


@Component({
  selector: 'app-update-detail',
  templateUrl: './update-detail.component.html',
  styleUrls: ['./update-detail.component.css']
})
export class UpdateDetailComponent implements OnInit {
  @ViewChild('Image')
  Image: ElementRef;
  [x: string]: any;
  env = environment;
  private url = this.env.apiUrl + 'file/'
  isHide = false;
  image: any = [];
  fileToUpload: File = null;
  dtOptions: any = {};
  myFiles: string[] = [];
  dtTrigger: Subject<UpdateDetailComponent> = new Subject();
  MyFiles: any = [];

  constructor(private PerfectScrollbar: PerfectScrollbarModule,
    private intimationService: IntimationService,
    private router: Router,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
    private http: HttpClient) { }

  VehicleImages = {
    Id: null,
    ImageType: null,
    ImageURL: '',
    Latitude: null,
    Longitude: null,
    Status: null,
    CreatedOn: null,
    UpdatedOn: null,
    CreatedBy: null,
    UpdatedBy: null,
    Time: null,
  }

  public intimationid = parseInt(this.route.snapshot.paramMap.get('IntimationID'), 10);


  user = {
    IntimationID: this.intimationid,
    IntimationStatus: null,
    InsurerNameDes: null,
    DivisionDes: null,
    BranchDes: null,
    InsurerRefNo: null,
    InsuredName: null,
    InsuredMobileNo: null,
    VehicleRegistrationNo: null,
    ReceiptNo: null,
    EngineNo: null,
    ChassisNo: null,
    StatusOf: null,
    ExtraKilometer: null,
    ManualReportNo: null,
    UnderTakingSlipNo: null,
    Colour: null,
    OdometerReading: null,
    StereoMake: null,
    CDChangerMake: null,
    AnyOther: null,
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
    VehicleRemarks: null,
    QCRemarks: null,
    SurveyCompletedOn: null,
    QCHoldReason: null,
    QCHoldRemarks: null,
    VehicleType: null,
    PaymentMode: null,
    ManufactureYear: null,
    Manufacturer: null,
    ModelDes: null,
    VarientDes: null,
    FourWheelerType: null,
    UpdateStatus: null,
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
    RCVerified: null,
    FuelUsed: null,
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
  };



  PaymentMode1: any;
  VehicleType1: any;
  ManufactureYear1: any;
  ManufacturerList: any;
  ModelList: any;
  FourWheelerType1: any;
  UpdateStatus1: any;
  VehicleLocation1: any;
  CngLpgFitted1: any;
  CngLpgEndorsdinRC1: any;
  FrontNoPlate1: any;
  RearNoPlate1: any;
  FrontBumper1: any;
  Grill1: any;
  HeadLampLT1: any;
  HeadLampRT1: any;
  IndicatorLightLT1: any;
  IndicatorLightRT1: any;
  FogLampLT1: any;
  FogLampRT1: any;
  FrontPanel1: any;
  Bonnet1: any;
  LeftApron1: any;
  RightApron1: any;
  LTFrontFender1: any;
  LTFrontDoor1: any;
  LTRearDoor1: any;
  LTPillarDoorA1: any;
  LTPillarCenterB1: any;
  LTPillarRearC1: any;
  LTRunningBoard1: any;
  LTQtrPanel1: any;
  Dicky1: any;
  RearBumper1: any;
  TailLampLT1: any;
  TailLampRT1: any;
  RTQtrPanel1: any;
  RTRearDoor1: any;
  RTFrontDoor1: any;
  RTPillarFrontA1: any;
  RTCenterPillarB1: any;
  RTPillarRearC1: any;
  RTRunningBoard1: any;
  RTFrontFender1: any;
  FloorSilencer1: any;
  UnderCarriage1: any;
  RearViewMirrorLT1: any;
  RearViewMirrorRT1: any;
  Rim1: any;
  RCVerified1: any;
  FuelUsed1: any;
  SeatCovers1: any;
  CentreLock1: any;
  GearLocking1: any;
  FrontwsGlassLaminated1: any;
  LeftFrontDoorGlass1: any;
  LeftRearDoorGlass1: any;
  RightFrontDoorGlass1: any;
  RightRearDoorGlass1: any;
  BackGlass1: any;
  Tyres1: any;
  ImageType1: any;
  IntimationID: any;
  Vehicleimg: any = [];
  images: any = [];
  ngOnInit() {




    // console.log(this.intimationid , 'intimationid');
    if (this.intimationid !== null || this.intimationid !== undefined) {
      this.intimationService.getCaseByInitimationID(this.intimationid).subscribe(data => {
        console.log(data, 'hello');
        this.IntimationID = data[0].IntimationID
        this.user = Object.assign(data[0]);

      });
    }

    this.intimationService.getpaymentmodeList().subscribe(data => {
      this.PaymentMode1 = data;

    });

    this.intimationService.getvehicletypeList().subscribe(data => {
      this.VehicleType1 = data;
    });

    this.intimationService.getFourWheelerTypeList().subscribe(data => {
      this.FourWheelerType1 = data;
    });

    this.intimationService.getmanufactureyearList().subscribe(data => {
      this.ManufactureYear1 = data;

    });

    this.intimationService.getManufacturerList().subscribe(data => {
      this.ManufacturerList = data;

    });

    this.intimationService.getModelList().subscribe(data => {
      this.ModelList = data;

    });

    this.intimationService.getupdatestatusList().subscribe(data => {
      this.UpdateStatus1 = data;

    });

    this.intimationService.getvehicleLocationList().subscribe(data => {
      this.VehicleLocation1 = data;

    });

    this.intimationService.getCngLpgList().subscribe(data => {
      this.CngLpgFitted1 = data;

    });

    this.intimationService.getCngLpgendorsList().subscribe(data => {
      this.CngLpgEndorsdinRC1 = data;

    });

    this.intimationService.getFrontNoPlateList().subscribe(data => {
      this.FrontNoPlate1 = data;

    });

    this.intimationService.getRearNoPlateList().subscribe(data => {
      this.RearNoPlate1 = data;

    });

    this.intimationService.getFrontBumperList().subscribe(data => {
      this.FrontBumper1 = data;

    });

    this.intimationService.getGrillList().subscribe(data => {
      this.Grill1 = data;

    });

    this.intimationService.getHeadLampLTList().subscribe(data => {
      this.HeadLampLT1 = data;

    });

    this.intimationService.getHeadLampRTList().subscribe(data => {
      this.HeadLampRT1 = data;

    });

    this.intimationService.getIndicatorLightLTList().subscribe(data => {
      this.IndicatorLightLT1 = data;

    });

    this.intimationService.getIndicatorLightRTList().subscribe(data => {
      this.IndicatorLightRT1 = data;

    });

    this.intimationService.getFogLampLTList().subscribe(data => {
      this.FogLampLT1 = data;

    });

    this.intimationService.getFogLampRTList().subscribe(data => {
      this.FogLampRT1 = data;

    });

    this.intimationService.getFrontPanelList().subscribe(data => {
      this.FrontPanel1 = data;

    });

    this.intimationService.getBonnetList().subscribe(data => {
      this.Bonnet1 = data;

    });

    this.intimationService.getLeftApronList().subscribe(data => {
      this.LeftApron1 = data;

    });
    this.intimationService.getRightApronList().subscribe(data => {
      this.RightApron1 = data;

    });

    this.intimationService.getLTFrontFenderList().subscribe(data => {
      this.LTFrontFender1 = data;

    });

    this.intimationService.getLTFrontDoorList().subscribe(data => {
      this.LTFrontDoor1 = data;

    });

    this.intimationService.getLTRearDoorList().subscribe(data => {
      this.LTRearDoor1 = data;

    });

    this.intimationService.getLTPillarDoorAList().subscribe(data => {
      this.LTPillarDoorA1 = data;

    });

    this.intimationService.getLTPillarCenterBList().subscribe(data => {
      this.LTPillarCenterB1 = data;

    });

    this.intimationService.getLTPillarRearCList().subscribe(data => {
      this.LTPillarRearC1 = data;

    });

    this.intimationService.getLTRunningBoardList().subscribe(data => {
      this.LTRunningBoard1 = data;

    });

    this.intimationService.getLTQtrPanelList().subscribe(data => {
      this.LTQtrPanel1 = data;

    });

    this.intimationService.getDickyList().subscribe(data => {
      this.Dicky1 = data;

    });

    this.intimationService.getRearBumperList().subscribe(data => {
      this.RearBumper1 = data;

    });

    this.intimationService.getTailLampLTList().subscribe(data => {
      this.TailLampLT1 = data;

    });

    this.intimationService.getTailLampRTList().subscribe(data => {
      this.TailLampRT1 = data;

    });

    this.intimationService.getRTQtrPanelList().subscribe(data => {
      this.RTQtrPanel1 = data;

    });

    this.intimationService.getRTRearDoorList().subscribe(data => {
      this.RTRearDoor1 = data;

    });

    this.intimationService.getRTFrontDoorList().subscribe(data => {
      this.RTFrontDoor1 = data;
    });

    this.intimationService.getRTPillarFrontAList().subscribe(data => {
      this.RTPillarFrontA1 = data;
    });

    this.intimationService.getRTCenterPillarBList().subscribe(data => {
      this.RTCenterPillarB1 = data;
    });

    this.intimationService.getRTPillarRearCList().subscribe(data => {
      this.RTPillarRearC1 = data;

    });

    this.intimationService.getRTRunningBoardList().subscribe(data => {
      this.RTRunningBoard1 = data;

    });

    this.intimationService.getRTFrontFenderList().subscribe(data => {
      this.RTFrontFender1 = data;

    });

    this.intimationService.getFloorSilencerList().subscribe(data => {
      this.FloorSilencer1 = data;

    });

    this.intimationService.getUnderCarriageList().subscribe(data => {
      this.UnderCarriage1 = data;

    });

    this.intimationService.getRearViewMirrorLTList().subscribe(data => {
      this.RearViewMirrorLT1 = data;

    });

    this.intimationService.getRearViewMirrorRTList().subscribe(data => {
      this.RearViewMirrorRT1 = data;

    });

    this.intimationService.getRimList().subscribe(data => {
      this.Rim1 = data;

    });

    this.intimationService.getRCVerifiedList().subscribe(data => {
      this.RCVerified1 = data;

    });

    this.intimationService.getFuelUsedList().subscribe(data => {
      this.FuelUsed1 = data;

    });

    this.intimationService.getSeatCoversList().subscribe(data => {
      this.SeatCovers1 = data;

    });

    this.intimationService.getCentreLockList().subscribe(data => {
      this.CentreLock1 = data;

    });

    this.intimationService.getGearLockingList().subscribe(data => {
      this.GearLocking1 = data;

    });


    this.intimationService.getFrontwsGlassLaminatedList().subscribe(data => {
      this.FrontwsGlassLaminated1 = data;

    });

    this.intimationService.getLeftFrontDoorGlassList().subscribe(data => {
      this.LeftFrontDoorGlass1 = data;

    });

    this.intimationService.getLeftRearDoorGlassList().subscribe(data => {
      this.LeftRearDoorGlass1 = data;

    });

    this.intimationService.getRightFrontDoorGlassList().subscribe(data => {
      this.RightFrontDoorGlass1 = data;

    });

    this.intimationService.getRightRearDoorGlassList().subscribe(data => {
      this.RightRearDoorGlass1 = data;

    });

    this.intimationService.getBackGlassList().subscribe(data => {
      this.BackGlass1 = data;

    });

    this.intimationService.getTyresList().subscribe(data => {
      this.Tyres1 = data;

    });

    this.intimationService.getImageTypeList().subscribe(data => {
      this.ImageType1 = data;
      //  console.log(this.ImageType1,'imagetypelist');
    });

    this.displayImages();
  }



  chooseFile() {
    $("#fileInput").click();
  }

  showhide() {
    if (this.isHide === false) {
      this.isHide = true;
    } else {
      this.isHide = false;
    }

  }



  uploadImage(e) {
    console.log(e)
    for (var i = 0; i < e.target.files.length; i++) {
      this.MyFiles.push(e.target.files[i]);
    }
    console.log(this.MyFiles, 'gggg')

  }

  saveImage(VehicleImageForm:NgForm) {
    const frmData = new FormData();
    console.log(this.MyFiles.length, 'My Files')
    for (var j = 0; j < this.MyFiles.length; j++) {
      frmData.append("files", this.MyFiles[j]);
      console.log(this.MyFiles[j], 'file data');
    }
    this.http.post<any>(this.url, frmData).subscribe(data => {
      console.log(data, 'file response');
      for (var i = 0; i < data.length; i++) {
        this.VehicleImages.ImageURL = data[i].filename;
        this.Vehicleimg.push(this.VehicleImages);
        // console.log(this.VehicleImages ,'vehicle')
        this.intimationService.saveVehicleImages(this.Vehicleimg, this.IntimationID)
          .subscribe(data => {
            console.log(data, 'data');

          });
          VehicleImageForm.reset();
          this.Image.nativeElement.value = "";
        this.displayImages();


      }
    });
  }

  displayImages() {
    // console.log(this.intimationid, 'intimation id');
    // this.intimationService.getAllImages(this.intimationid).subscribe(data => {
    //   console.log(data, 'savedImages');
    //   this.images = data;
    // });
    this.intimationService.GetAllSavedImages(this.intimationid, this.intimation.VehicleType).subscribe(data => {
      this.image = data;
      console.log(this.image);
      this.image = data;
    });
  }

  QcStatusUpdate(value) {
    if (value === 'QC Hold') {
      this.user.IntimationStatus = 792;
    } else if (value === 'QC Done') {
      this.user.IntimationStatus = 39;
    }

    this.intimationService.saveIntimation(this.user).subscribe(
      (data: any) => {

        this.showSuccess('Intimation ID: ' + data[0].IntimationID + ' Update successfully', 'Intimation Saved');
      }, (err) => {

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
}
