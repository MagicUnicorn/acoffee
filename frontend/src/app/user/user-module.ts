import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserComponent } from './user-controller';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    CommonModule
  ],
})
export class BlogModule {
  
}
