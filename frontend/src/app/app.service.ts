import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { host } from './main';
import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class RequestService {
    constructor(
        private http: Http,
        private http2: HttpClient, 

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

    getContact() {
        return this.http.get(host + '/contact/', this.options).pipe(map((res: Response) => res.json()))
    }

    setOrder(order) {
        const token = JSON.parse(localStorage.getItem('token'))
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token

        });
        this.http2.post(host + '/order_product/', order, {headers: headers})
            .toPromise().then(response => {
                console.log(response)
            })
    }

    setReview(username, title, review): Observable<any> {
        const token = JSON.parse(localStorage.getItem('token'))
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token

        });
        let data = {user:username, title:title,  body:review}
        return this.http2.post(host + '/review/', data, {headers: headers})
    }

    getOrder(username): Observable<any> {
        const token = JSON.parse(localStorage.getItem('token'))
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token

        });
        return this.http2.get(host + '/order_product/get_order?user=' + username, {headers: headers})
    }

}
