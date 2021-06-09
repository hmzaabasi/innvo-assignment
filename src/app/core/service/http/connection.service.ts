import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor() { }
  getApiUrl(): string {
    return environment.apiUrl;
  }
}
