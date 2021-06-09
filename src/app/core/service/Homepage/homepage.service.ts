import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { mergeMap, takeUntil } from 'rxjs/operators';
import { HttpApiService } from '../http/http-api.service';

@Injectable({
    providedIn: 'root'
})
export class HomepageService {

    constructor(
        private httpApiService: HttpApiService
    ) { }

    getDashboardData(): Observable<any> {
        const urls = ["posts", "users"];
        /* this will emit each url as a value */
        return from(urls).pipe(
            /* merge each url to an Observable of the http get request */
            mergeMap(url => this.httpApiService.get(url, null))
        )
    }

}
