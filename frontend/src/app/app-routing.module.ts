import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about-controller';
import { MenuComponent } from './menu/menu-controller';
import { ServiceComponent } from './service/service-controller';
import { BlogComponent } from './blog/blog-controller';
import { OrderComponent } from './order/order-controller';
import { ShopComponent } from './shop/shop-controller';
import { UserComponent } from './user/user-controller';
import { ContactComponent } from './contact/contact-controller'
import { MainComponent } from './main/main-controller'

const routes: Routes = [
  // {path: '', component: AppComponent, pathMatch: 'full'},
  {path: '', component: AboutComponent},
  {path: 'about', component: AboutComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'order', component: OrderComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'user', component: UserComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'main', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
