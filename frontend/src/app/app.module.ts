import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about-controller';
import { MenuComponent } from './menu/menu-controller'
import { RequestService } from './app.service'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [
    RequestService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
