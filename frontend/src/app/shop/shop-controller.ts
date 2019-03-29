import { RequestService } from '../app.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../global.service'

@Component({
    selector: 'app-menu',
    templateUrl: 'shop.html',
    providers: [
        RequestService, 
        DataService
    ]
})

export class ShopComponent implements OnInit {
    products = []
    order = []
    menus = {}
    constructor(
        private rs: RequestService,
        private data: DataService
    ) {
    }

    ngOnInit() {
        this.rs.getProducts().toPromise().then(response => {
            let order = []
            this.categorizationProductInfo(response);
            this.clearFilter();
            order = this.getCurrentOrder()
            this.menus["Все"].forEach(function(elem) {
                for (var i = 0; i < order.length; i++) {
                    if (order[i].id == elem.id) {
                        elem.ordered = true;
                        elem.quantity = order[i].quantity
                    }
                }
            })
            this.order = order
        })

    };

    objectKeys(obj) {
        return Object.keys(obj);
    }

    getCurrentOrder () {
        return this.data.getCurrentOrder()
    }

    updateCurrentOrder(elemOrder, isDelete) {
        this.data.updateCurrentOrder(elemOrder, isDelete)
    }

    sortProduct(key) {
        this.products = this.menus[key]
    }

    clearFilter() {
        let products = []
        for (var prop in this.menus) {
            products = products.concat(this.menus[prop])
          }
        this.products = products
    }

    categorizationProductInfo(data) {
        let m = {}
        let all = []
        data.forEach(function(elem) {
            if (!(elem["category"]["name"] in m)) {
                elem["ordered"] = false
                elem['quantity'] = 1
                m[elem["category"]["name"]] = [elem]
            } else {
                elem['ordered'] = false
                elem['quantity'] = 1
                m[elem["category"]["name"]].push(elem)
            }
            elem['ordered'] = false
            all.push(elem)
        })
        m['Все'] = all
        this.menus = m
    }

    addToOrder(productId: number) {
        let res = []
        this.menus['Все'].forEach(function(elem) {
            if (elem['id'] == productId ) {
                elem['ordered'] = true
                elem['quantity'] = 1
                res = elem
            }
        })
        this.updateCurrentOrder(res, false)
    }

    deleteFromOrder(productId: number) {
        let deleteProduct = {}
        this.menus['Все'].forEach(function(elem) {
            if (elem['id'] == productId ) {
                elem['ordered'] = false
                deleteProduct = elem  
            }
        })
        this.updateCurrentOrder(deleteProduct, true)
    }
}

