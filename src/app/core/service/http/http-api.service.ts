import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConnectionService } from './connection.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {
  basePath: string;
  constructor(
    private http: HttpClient,
    private connectionService: ConnectionService,
  ) {
    this.basePath = this.connectionService.getApiUrl();
  }
  get(path: string, params: any): Observable<any> {
    let url_ = this.basePath + path;
    url_ = url_.replace(/[?&]$/, "");
    let options_: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8'
      }),
      params: params
    };
    return this.http.request("get", url_, options_)

  }

}
