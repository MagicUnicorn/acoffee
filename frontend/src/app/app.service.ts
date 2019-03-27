import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { host } from './main';
import { map} from 'rxjs/operators';

@Injectable()
export class RequestService {
    constructor(
        private http: Http,

    ) {
     }

    private get options() {
        let headers = new Headers({
            'Content-Type': 'application/json',

        });
        return new RequestOptions({ headers: headers });
    }

    getProducts() {
        return this.http.get(host + '/products/', this.options).pipe(map((res: Response) => res.json()))
    }

    getReview() {
        return this.http.get(host + '/review/', this.options).pipe(map((res: Response) => res.json()))
    }

    getNews() {
        return this.http.get(host + '/news/', this.options).pipe(map((res: Response) => res.json()))
    }

}
