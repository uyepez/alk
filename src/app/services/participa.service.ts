import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface registroDiferencias {
  dif01: string
  dif02: string
  dif03: string
  dif04: string
  dif05: string
  time: string
}


@Injectable({
  providedIn: 'root'
})
export class ParticipaService {

  URLService: string = environment.apiUrl;
   token: string = '';

  constructor(private http: HttpClient) { }
    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        //'Authorization': 'Basic ' + btoa('admin:admin'),
      }),
    };


    registroDiferencias(diferencias:registroDiferencias) {
      this.token = localStorage.getItem(environment.tokenVar) as string;

      const body = new HttpParams()
        .set('dif01', diferencias.dif01)
        .set('dif02', diferencias.dif02)
        .set('dif03', diferencias.dif03)
        .set('dif04', diferencias.dif04)
        .set('dif05', diferencias.dif05)
        .set('time', diferencias.time)
        .set('token', this.token);

        return this.http.post(`${this.URLService}/regDif`,body.toString(),this.httpOptions);
    }

    registro(foto:string) {
      this.token = localStorage.getItem(environment.tokenVar) as string;

      const body = new HttpParams()
        .set('foto', foto)
        .set('token', this.token);

        return this.http.post(`${this.URLService}/regpart`,body.toString(),this.httpOptions);
    }

}
