import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact-controller';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    CommonModule
  ],
})
export class ContactModule {
  
}
