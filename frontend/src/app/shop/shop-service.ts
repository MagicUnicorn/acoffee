import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { host } from './../main' 

@Injectable()
export class ShopService {  
  constructor(
    private http: Http
  ) {} 

  private get options() {
    let headers = new Headers({
        'Content-Type': 'application/json',

    });
    return new RequestOptions({ headers: headers });
  }

  getProducts() {
    return this.http.get(host + '/products/', this.options).pipe(map((res: Response) => res.json()))
}

}