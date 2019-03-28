import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  order = []
  constructor() { }

  getCurrentOrder() {
    if (localStorage.getItem('order') == null) {
      localStorage.setItem('order', JSON.stringify(this.order));
    } else {
      this.order = JSON.parse(localStorage.getItem('order'));
    }
    return this.order
  }

  updateCurrentOrder(elemOrder, isDelete) {
      let order = []
      order = JSON.parse(localStorage.getItem('order'))
      if (!isDelete) {
          order.push(elemOrder)
      } else {
          order = order.filter(function(el) { return el.id != elemOrder.id; });
      }
      localStorage.setItem('order', JSON.stringify(order));

  }

  setOrder(order) {
    localStorage.setItem('order', JSON.stringify(order));
  }

}