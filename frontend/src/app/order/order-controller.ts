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
        private rs: RequestService,
        private authServ: AuthenticationService,
        private data: DataService
    ) {

    }

    getCurrentOrder () {
        let totalSum = 0
        this.order = this.data.getCurrentOrder()
        this.order.forEach(function(elem, index) {
            totalSum += elem['price'] * elem['quantity']
        })
        this.totalSum = totalSum
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

    changeQuantity(event, productId) {
        let indexOrder = 0
        let totalSum = 0
        this.order.forEach(function(elem, index) {
            if (elem["id"] == productId) {
                indexOrder = index
                elem['quantity'] = event.target.value
            } 
            totalSum += elem['price'] * elem['quantity']
        })
        this.totalSum = totalSum
        this.data.setOrder(this.order)
    }

    createOrder() {
        let order = {}
        order["order"] = {}
        order["order"]["user"] = JSON.parse(localStorage.getItem('user'));
        order["product"] = []
        for (var i = 0; i < this.order.length; i++) {
            order["product"].push({"id":this.order[i].id, "quantity": this.order[i].quantity})
        }
        console.log(order)
        this.rs.setOrder(order)
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

