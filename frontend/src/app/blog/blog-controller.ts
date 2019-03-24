import { RequestService } from '../app.service'
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-menu',
    templateUrl: 'blog.html',
    providers: [RequestService]
})

export class BlogComponent implements OnInit {
    news = [] 
    constructor(
        private rs: RequestService,
    ) {

    }

    ngOnInit() {
        this.rs.getNews().toPromise().then(response => {
            this.updateBlogInfo(response)
        })
    };

    updateBlogInfo(data) {
        data.forEach(function(elem) {
            elem["timestamp_create"] = new Date(elem["timestamp_create"]);
        })

        this.news = data
    }
}

