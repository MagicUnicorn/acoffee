import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about-controller';
import { MenuComponent } from './menu/menu-controller';
import { RequestService } from './app.service';
import { ServiceComponent} from './service/service-controller';
import { BlogComponent} from './blog/blog-controller';
import { OrderComponent} from './order/order-controller';
import { OrderService } from './order/order-service';
import { ShopComponent } from './shop/shop-controller';
import { UserComponent } from './user/user-controller';
import { AuthenticationService } from './auth.service';
import { ContactComponent } from './contact/contact-controller';
import { MainComponent } from './main/main-controller';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MenuComponent,
    ServiceComponent,
    BlogComponent,
    OrderComponent,
    ShopComponent,
    UserComponent,
    ContactComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [
    RequestService,
    OrderService,
    AuthenticationService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
