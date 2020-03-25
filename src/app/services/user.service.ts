import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders ,HttpParams} from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  env = environment;
  loggedInUser = JSON.parse(localStorage.getItem('LoggedINUser')).UserID;
  private url = this.env.apiUrl + 'users';

  constructor(private httpClient: HttpClient) { }

// this function is used for add users in the database
  saveUser(user: User): Observable<User> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'UserSave');
    return this.httpClient.post<User>(this.url, user, { headers: headers, params: params})
    .pipe(catchError(this.handleError));
    }
      
// user ka data of list get ka function
   getUserList(): Observable<User[]>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'UserDataAll');
    return this.httpClient.get<User[]>(this.url,  { headers: headers, params: params})
    .pipe(catchError(this.handleError));
   }

  //  update k lie id get krne ka function
  getUserByID(userid:number): Observable<User[]>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('id', userid.toString()).set('mode','UserDataByID');
    return this.httpClient.get<User[]>(this.url,  { headers: headers, params: params}) 
   }
  //  update user details
  updateUser(user: User): Observable<User> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'UpdateUser');
    return this.httpClient.post<User>(this.url, user, { headers: headers, params: params})
    .pipe(catchError(this.handleError));
    }



  //  delete function
  deleteUserList(id): Observable<User[]>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('mode', 'UserDeletedata').set('id',id);
    return this.httpClient.delete<any[]>(this.url,  { headers: headers, params: params})
    .pipe(catchError(this.handleError));
   }



   getinsurernameList(): Observable<any[]>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'InsurerNameList');
    return this.httpClient.get<any[]>(this.url,  { headers: headers, params: params})
    .pipe(catchError(this.handleError));
   }


   getuserroleList(): Observable<any[]>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'UserRoleList');
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
