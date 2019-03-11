import { RequestService } from '../app.service'
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.html',
    // styleUrls: [ 'about.style.css' ]
})
export class MenuComponent implements OnInit {
    constructor(
        private rs: RequestService,
    ) {}

    ngOnInit() {
        this.getProducts();
    };

    getProducts() {
        this.rs.getProducts().subscribe(
            response => {
                console.log("//////////cd f ", response)
            }
        )
    }
}

