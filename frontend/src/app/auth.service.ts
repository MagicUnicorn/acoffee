import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions, Response } from '@angular/http';
import { Router } from "@angular/router"
import { host } from './main';

@Injectable()
export class AuthenticationService {
    constructor(
        private http: HttpClient, 
        private router: Router    
    ) { }

    private get options() {
        let headers = new Headers({
            'Content-Type': 'application/json',

        });
        return new RequestOptions({ headers: headers });
    }

    create_user(first_name:string, last_name:string, email:string, username: string, password: string) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        let params = {first_name, last_name, email, username, password}
        console.log(params)
        this.http.post(host + '/create_user/', params, {headers: headers})
            .toPromise().then(response => {
                this.logout();
                this.login(username, password);
                this.router.navigate(['/menu']);
            })
    }

    login(username: string, password: string) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        this.http.post(host + '/api-token-auth/', {username: username, password: password}, {headers: headers})
            .toPromise().then(response => {
                let token = response['token']
                if (token) {
                    localStorage.removeItem('user');
                    localStorage.setItem('token', JSON.stringify(token));
                    localStorage.setItem('user', JSON.stringify(username));
                }
            })
        }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
    }
}