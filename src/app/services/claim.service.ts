import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders ,  HttpParams} from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { Claim } from '../models/claim';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  env = environment;
  loggedInUser = JSON.parse(localStorage.getItem('LoggedINUser')).UserID;
  private url = this.env.apiUrl + 'claim';

  constructor(private httpClient: HttpClient) { }
  saveclaim(claim: Claim): Observable<Claim> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'ClaimSave');
    return this.httpClient.post<Claim>(this.url, claim, { headers: headers, params: params})
    .pipe(catchError(this.handleError));
    }

    getClaimList(): Observable<Claim[] > {
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'ClaimDataAll');
      return this.httpClient.get<Claim[]>(this.url,  { headers: headers, params: params})
      .pipe(catchError(this.handleError));
     }


    private handleError(errorResponse: HttpErrorResponse) {
      if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error: ', errorResponse.error.message);
      } else {
        console.error('Server Side Error: ', errorResponse);

      return throwError('"Hello"');
    }
}
}
