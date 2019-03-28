import { RequestService } from '../app.service'
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { resolve, reject } from 'q';

@Component({
    selector: 'app-menu',
    templateUrl: 'service.html',
    providers: [RequestService]
})

export class ServiceComponent implements OnInit {
    reviews = [] 
    constructor(
        private rs: RequestService,
    ) {

    }

    ngOnInit() {
        this.rs.getReview().toPromise().then(response => {
            this.updateReviewInfo(response)
        })
    };

    updateReviewInfo(data) {
        data.forEach(function(elem) {
            elem["timestamp_create"] = new Date(elem["timestamp_create"]);
        })
        this.reviews = data
    }

    create_review(username, title, review) {
        this.rs.setReview(username, title, review).subscribe(res=> {
            this.reviews = res
        })
        window.location.reload();
    }
}

