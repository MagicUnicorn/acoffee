import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RequestService {
    private host: string;
    constructor(
        private http: Http,

    ) {
        this.host = "http://localhost:8000";
     }

    private handleError(error: Response | any) {
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private get options() {
        let headers = new Headers({
            'Content-Type': 'application/json',

        });
        return new RequestOptions({ headers: headers });
    }

    // private get options() {
    //     let headers = new Headers({
    //         'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(username + ':' + password)
    //     });
    //     return new RequestOptions({ headers: headers });
    // }

    // getProducts(): Observable<any> {
    //     return this.http.get(this.host + '/products', this.options).pipe(map(res => res.json()));
    // }

    getProducts() {
        // r = this.http.get(this.host, this.options);  //.subscribe((res)=>{debugger; this.extractData(res)});
        return this.http.get(this.host + '/products/', this.options).pipe(map((res: Response) => res.json()))
    }
}