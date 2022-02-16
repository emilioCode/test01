import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public route: Router;
  public baseUrlService = "http://localhost:5000/";
  public headers = new HttpHeaders().set("content-type", "application/json");
  public http;

  constructor(
    private _http: HttpClient,
    private _route: Router
    ) {
    this.route = _route;
    this.http = _http;
  }

  // Http Services
  getData(api: string, data: string = ''): Observable<any> {
    return this.http.get(this.baseUrlService + api + data);
  }

  postData(api: string, data: any): Observable<any> {
    return this.http.post(this.baseUrlService + api, data);
  }
}
