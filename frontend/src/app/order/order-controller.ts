import { RequestService } from '../app.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../auth.service';
import { DataService } from './../global.service';

@Component({
    selector: 'app-menu',
    templateUrl: 'order.html',
    providers: [
        RequestService, 
        DataService
    ]
})

export class OrderComponent implements OnInit {
    loginDisplay = false
    order = []
    totalSum = 0

    constructor(
        private authServ: AuthenticationService,
        private data: DataService
    ) {

    }

    getCurrentOrder () {
        this.order = this.data.getCurrentOrder()
    }

    updateCurrentOrder(elemOrder, isDelete) {
        this.data.updateCurrentOrder(elemOrder, isDelete)
    }

    deleteProductOrder(productId) {
        let elem = {}
        this.order.filter(function(el) {
             if (el.id == productId) {
                elem = el
             }
            });
        var index = this.order.indexOf(elem);
        if (index > -1) {
            this.order.splice(index, 1);
        }
        this.updateCurrentOrder(elem, true)
        
    }

    changeQuantity(event) {
        console.log(event.target.value, '909809809809')
    }

    ngOnInit() {
        this.getCurrentOrder()
        const currentUser = JSON.parse(localStorage.getItem('token'));
        if (currentUser) {
            this.loginDisplay = true;
        } else {
            this.loginDisplay = false;
        }
    };

    login(username: string, password: string) {
        this.authServ.login(username, password);
        this.loginDisplay = true;

    }

    logout() {
        this.authServ.logout()
        this.loginDisplay = false;
    }
}

