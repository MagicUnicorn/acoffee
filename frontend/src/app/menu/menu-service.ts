import { Injectable } from '@angular/core';
import { RequestService } from '../app.service'

@Injectable()
export class MenuService {
    constructor(
        private rs: RequestService
    ) { }

    getProducts() {
        return this.rs.getProducts();
    }
}
