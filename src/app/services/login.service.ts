import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  data = 'Información confidencial';


  URLService: string = environment.apiUrl;
    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        //'Authorization': 'Basic ' + btoa('admin:admin'),
      }),
    };


    login(milog:string) {

      const body = new HttpParams()
      .set('correo', milog);
      return this.http.post(`${this.URLService}/login`,body.toString(),this.httpOptions);
    }

}
