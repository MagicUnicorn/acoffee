import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { map} from 'rxjs/operators';

@Injectable()
export class RequestService {
    private host: string;
    constructor(
        private http: Http,

    ) {
        this.host = "http://104.248.31.49:8000";
     }

    private get options() {
        let headers = new Headers({
            'Content-Type': 'application/json',

        });
        return new RequestOptions({ headers: headers });
    }

    getProducts() {
        return this.http.get(this.host + '/products/', this.options).pipe(map((res: Response) => res.json()))
    }

    getReview() {
        return this.http.get(this.host + '/review/', this.options).pipe(map((res: Response) => res.json()))
    }

    getNews() {
        return this.http.get(this.host + '/news/', this.options).pipe(map((res: Response) => res.json()))
    }

}
