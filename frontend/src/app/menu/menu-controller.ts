import { RequestService } from '../app.service'
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.html',
    // styleUrls: [ 'about.style.css' ]
    providers: [RequestService]
})

export class MenuComponent implements OnInit {
    menus = []
    constructor(
        private rs: RequestService,
    ) {

    }

    ngOnInit() {
        this.getProducts();
    };

    getProducts() {
        this.rs.getProducts().subscribe(
            response => {
                this.menus = response;
                console.log(this.menus)
            }
        );
        
    }
}

