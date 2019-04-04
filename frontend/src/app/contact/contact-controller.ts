import { RequestService } from '../app.service'
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../auth.service'


@Component({
    selector: 'app-menu',
    templateUrl: 'contact.html',
    providers: [RequestService]
})

export class ContactComponent implements OnInit {
    contacts = []

    constructor(
        private rs: RequestService,
    ) {

    }

    ngOnInit() {
        this.rs.getContact().toPromise().then(response => {
            this.contacts = response
        })
    };

    sendLetter(first_name, last_name, email, message) {
        this.rs.setMessage(first_name, last_name, email, message)
    }
}

