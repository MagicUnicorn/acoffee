import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about-controller';
import { MenuComponent } from './menu/menu-controller'

const routes: Routes = [
  // {path: '', redirectTo: '/about', pathMatch: 'full' },
  {path: '', component: AboutComponent},
  {path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
