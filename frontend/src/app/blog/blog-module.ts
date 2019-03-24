import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BlogComponent } from './blog-controller';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    BlogComponent
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
