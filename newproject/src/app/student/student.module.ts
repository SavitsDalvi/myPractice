import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ApicallComponent } from './apicall/apicall.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ApicallComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule
  ]
})
export class StudentModule { }
