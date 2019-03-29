import { RequestService } from '../app.service'
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../auth.service'


@Component({
    selector: 'app-menu',
    templateUrl: 'main.html',
    providers: [RequestService]
})

export class MainComponent {

}

