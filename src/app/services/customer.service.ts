import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders ,HttpParams} from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { Customer } from '../models/customer';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  env = environment;
  loggedInUser = JSON.parse(localStorage.getItem('LoggedINUser')).UserID;
  private url = this.env.apiUrl + 'customer';

  constructor(private httpClient: HttpClient) { }
  savecustomer(customer: Customer): Observable<Customer> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'CustomerSave');
    return this.httpClient.post<Customer>(this.url, customer, { headers: headers, params: params})
    .pipe(catchError(this.handleError));
    }


    CustomerSubjectList(): Observable<any[]>{
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'CustomerSubjectList');
      return this.httpClient.get<any[]>(this.url,  { headers: headers, params: params})
      .pipe(catchError(this.handleError));
     }
     

     CustomerGrievanceTypeList(): Observable<any[]>{
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'CustomerGrievanceList');
      return this.httpClient.get<any[]>(this.url,  { headers: headers, params: params})
      .pipe(catchError(this.handleError));
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
