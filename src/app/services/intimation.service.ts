import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Intimation } from '../models/intimation';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class IntimationService {
  env = environment;
  loggedInUser = JSON.parse(localStorage.getItem('LoggedINUser')).UserID;
  private url = this.env.apiUrl + 'intimation';

  constructor(private httpClient: HttpClient) { }

  // this function is used for add users or intimations in the database
  saveIntimation(intimation: Intimation): Observable<Intimation> {
      console.log('intimation');
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'IntimationSave');
    return this.httpClient.post<Intimation>(this.url, intimation, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }


  saveVehicleImages(data:any,IntimationID): Observable<any> {
     console.log(data,'yyy');
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  const params = new HttpParams().set('IntimationID',IntimationID).set('loggedOnUser',this.loggedInUser).set('mode', 'InsertImages');
  return this.httpClient.post<any>(this.url,data,{ headers: headers, params: params })
    .pipe(catchError(this.handleError));
}

// getAllImages(IntimationID): Observable<any[]> {
//   const headers = new HttpHeaders().set('Content-Type', 'application/json');
//   const params = new HttpParams().set('IntimationID', IntimationID).set('mode', 'GetAllSavedImages');
//   return this.httpClient.get<any[]>(this.url, { headers: headers, params: params })
//     .pipe(catchError(this.handleError));
// }

GetAllSavedImages(ID: any, VehicleType: any): Observable<any[]> {
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'GetAllSavedImages').set('id', ID)
  .set('vehicleType', VehicleType);
  return this.httpClient.get<any[]>(this.url, { headers: headers, params: params })
    .pipe(catchError(this.handleError));
}


  getCaseList(status: string): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'CaseList').set('caseStatus', status);
    return this.httpClient.get<any[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }


  getImageTypeList(): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('mode', 'ImageTypeeList')
    return this.httpClient.get<any[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getreportdetails(IntimationID): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('IntimationID', IntimationID).set('mode', 'ReportDetailsLIst');
    return this.httpClient.get<any[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }


  getSurveyDoneList(): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'SurveDoneList');
    return this.httpClient.get<any[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }


  getSupportMasterList(): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'SupportMasterList');
    return this.httpClient.get<any[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getSupportMaster2List(): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'SupportMaster2List');
    return this.httpClient.get<any[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getSupportMaster3List(): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'SupportMaster3List');
    return this.httpClient.get<any[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getSurveyorlist(): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'Surveyorlist');
    return this.httpClient.get<any[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getCaseByInitimationID(ID: any,): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'CasebyIntimationID').set('id', ID);
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }


  getRoofficeList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RoOfficeList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getinsurernameList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'InsurerNameList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getSupportMaster3Data(ReferenceNo, tablename): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('ReferenceNo', ReferenceNo).set('tablename', tablename).set('mode', 'SupportMaster3Data');
    return this.httpClient.get<any[]>(this.url, { headers: headers, params: params });
  }

  getSupportMaster2Data(ReferenceNo, tablename): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('ReferenceNo', ReferenceNo).set('tablename', tablename).set('mode', 'SupportMaster2Data');
    return this.httpClient.get<any[]>(this.url, { headers: headers, params: params });
  }

 

  getinsspectiontypeList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'InspectionTypeList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getManufacturerList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'ManufacturerList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getpaymentmodeList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'PaymentModeList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getvehicletypeList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'VehicleTypeList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getmanufactureyearList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'ManufactureYearList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getFourWheelerTypeList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'FourWheelerTypeList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getModelList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'ModelList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }


  getupdatestatusList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'UpdateStatusList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getvehicleLocationList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'VehicleLocationList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getCngLpgList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'CngLpgList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getCngLpgendorsList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'CngLpgendorsList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getFrontNoPlateList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'FrontplateList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRearNoPlateList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RearplateList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }


  getFrontBumperList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'FrontBumperList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }


  getGrillList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'GrillList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getHeadLampLTList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'HeadLampLTList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getHeadLampRTList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'HeadLampRTList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }


  getIndicatorLightLTList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'IndicatorLightLTList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getIndicatorLightRTList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'IndicatorLightRTList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }


  getFogLampLTList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'FogLampLTList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getFogLampRTList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'FogLamptRTList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getFrontPanelList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'FrontPanelList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getBonnetList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'BonnetList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getLeftApronList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'LeftApronList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRightApronList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RightApronList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getLTFrontFenderList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'LTFrontFenderList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getLTFrontDoorList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'LTFrontDoorList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getLTRearDoorList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'LTRearDoorList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getLTPillarDoorAList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'LTPillarDoorAList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getLTPillarCenterBList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'LTPillarCenterBList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getLTPillarRearCList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'LTPillarRearCList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getLTRunningBoardList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'LTRunningBoardList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getLTQtrPanelList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'LTQtrPanelList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getDickyList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'DickyList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRearBumperList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RearBumperList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getTailLampLTList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'TailLampLTList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getTailLampRTList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'TailLampRTList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRTQtrPanelList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RTQtrPanelList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRTRearDoorList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RTRearDoorList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRTFrontDoorList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RTFrontDoorList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRTPillarFrontAList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RTPillarFrontAList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRTCenterPillarBList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RTCenterPillarBList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRTPillarRearCList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RTPillarRearCList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRTRunningBoardList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RTRunningBoardList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRTFrontFenderList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RTFrontFenderList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getFloorSilencerList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'FloorSilencerList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getUnderCarriageList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'UnderCarriageList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRearViewMirrorLTList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RearViewMirrorLTList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRearViewMirrorRTList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RearViewMirrorRTList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRimList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RimList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getFuelUsedList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'FuelUsedList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRCVerifiedList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RCVerifiedList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getSeatCoversList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'SeatCoversList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getCentreLockList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'CentreLockList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getGearLockingList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'GearLockingList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }


  getFrontwsGlassLaminatedList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'FrontwsGlassLaminatedList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }


  getLeftFrontDoorGlassList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'LeftFrontDoorGlassList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getLeftRearDoorGlassList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'LeftRearDoorGlassList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRightFrontDoorGlassList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RightFrontDoorGlassList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRightRearDoorGlassList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RightRearDoorGlassList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getBackGlassList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'BackGlassList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getTyresList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'TyresList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getCowlList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'CowlList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getDashboardList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'DashboardList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getLeftMudguardList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'LeftMudguardList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRightMudguardList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RightMudguardList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getCabinList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'CabinList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getCabinRightDoorList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'CabinRightDoorList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getCabinLeftDoorList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'CabinLeftDoorList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getFrontBodyList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'FrontBodyList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRearBodyList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RearBodyList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getLeftSideBodyList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'LeftSideBodyList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getRightSideBodyList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'RightSideBodyList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getHeadLightList(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'HeadLightList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getintimationstatuslist(): Observable<Intimation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'IntimationStatusList');
    return this.httpClient.get<Intimation[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }


  // deleteCases(IntimationID): Observable<Intimation[]>{
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   const params = new HttpParams().set('mode', 'CasesDelete').set('IntimationID',IntimationID);
  //   return this.httpClient.delete<any[]>(this.url,  { headers: headers, params: params})
  //   .pipe(catchError(this.handleError));
  //  }



  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error.message);
    } else {
      console.error('Server Side Error: ', errorResponse);
    }

    return throwError('"Hello"');
  }
}