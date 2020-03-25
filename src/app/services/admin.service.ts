import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders ,HttpParams} from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  env = environment;
  loggedInUser = JSON.parse(localStorage.getItem('LoggedINUser')).ID;
  private url = this.env.apiUrl + 'admin';
  // (here admin is a admin service name of routes ) 

  constructor(private httpClient: HttpClient) { }

  saveSupportMaster3(data): Observable<any> {
    // console.log('addfield');
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'saveSupportMaster3');
    return this.httpClient.post<any>(this.url, data, { headers: headers, params: params})
    .pipe(catchError(this.handleError));
    }


    saveSupportMaster2(data): Observable<any> {
      // console.log('addfield');
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'saveSupportMaster2');
      return this.httpClient.post<any>(this.url, data, { headers: headers, params: params})
      .pipe(catchError(this.handleError));
      }


  getinsurernameList(): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'InsurerNameList');
    return this.httpClient.get<any[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }


  getManufactureYearList(): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'ManufactureYearList');
    return this.httpClient.get<any[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  
 

  getSupportMaster3AllData(): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('mode', 'getSupportMaster3AllData');
    return this.httpClient.get<any[]>(this.url, { headers: headers, params: params })
      .pipe(catchError(this.handleError));
  }

  getSupportMaster2AllData(): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('mode', 'getSupportMaster2AllData');
    return this.httpClient.get<any[]>(this.url, { headers: headers, params: params })
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


  

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error.message);
    } else {
      console.error('Server Side Error: ', errorResponse);
    }

    return throwError('"Hello"');
  }


}
