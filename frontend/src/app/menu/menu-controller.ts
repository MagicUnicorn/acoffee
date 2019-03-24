import { RequestService } from '../app.service'
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { resolve, reject } from 'q';


@Component({
    selector: 'app-menu',
    templateUrl: 'menu.html',
    // styleUrls: [ 'about.style.css' ]
    providers: [RequestService]
})

export class MenuComponent implements OnInit {
    data = []
    menus = {}
    constructor(
        private rs: RequestService,
    ) {

    }

    ngOnInit() {
        this.rs.getProducts().toPromise().then(response => {
            this.sortProductInfo(response);
        })
    };

    objectKeys(obj) {
        return Object.keys(obj);
    }


    sortProductInfo(data) {
        let m = {}
        data.forEach(function(elem) {
            if (!(elem["category"]["name"] in m)) {
                m[elem["category"]["name"]] = [elem]
            } else {
                m[elem["category"]["name"]].push(elem)
            }
        })
        this.menus = m
    }
}

