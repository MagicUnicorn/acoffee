import { RequestService } from '../app.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../auth.service';
import { DataService } from './../global.service';
import { host } from './../main';

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
    ordered = []
    totalSum = 0
    totalSumOrdered = 0

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
        this.rs.setOrder(order)
        this.getOrdered(JSON.parse(localStorage.getItem('user')))
        this.data.setOrder([])
        this.order = []
        window.location.reload();

    }

    getOrdered(username) {
        let sumOrdered = 0
        this.rs.getOrder(username).subscribe(res=> {
            this.ordered = res;
            for (var i = 0; i < this.ordered.length; i++) {
                this.ordered[i].image = host + this.ordered[i].image
                sumOrdered += this.ordered[i].price * this.ordered[i].quantity
            }
            this.totalSumOrdered = sumOrdered
        })
        
    }

    ngOnInit() {
        this.getCurrentOrder()
        const currentUser = JSON.parse(localStorage.getItem('token'));
        if (currentUser) {
            this.loginDisplay = true;
        } else {
            this.loginDisplay = false;
        }
        this.getOrdered(JSON.parse(localStorage.getItem('user')))
    };

    login(username: string, password: string) {
        this.authServ.login(username, password);
        this.loginDisplay = true;
        // window.location.reload();

    }

    logout() {
        this.authServ.logout()
        this.loginDisplay = false;
    }
}

