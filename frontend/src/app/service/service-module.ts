import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceComponent } from './service-controller';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ServiceComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    CommonModule
  ],
})
export class ServiceModule { }
