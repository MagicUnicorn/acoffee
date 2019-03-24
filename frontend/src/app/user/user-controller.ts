import { RequestService } from '../app.service'
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../auth.service'


@Component({
    selector: 'app-menu',
    templateUrl: 'user.html',
    providers: [RequestService]
})

export class UserComponent implements OnInit {
    constructor(
        private authServ: AuthenticationService
    ) {

    }

    ngOnInit() {
    };

    create_user(first_name:string, last_name:string, email:string, username:string, password:string) {
        this.authServ.create_user(first_name, last_name, email, username, password)
    }
}

