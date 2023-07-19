import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ApicallComponent } from './apicall/apicall.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentActivityComponent } from './student-activity/student-activity.component';
import { StudentDemoComponent } from './student-demo/student-demo.component';


@NgModule({
  declarations: [
    ApicallComponent,
    StudentActivityComponent,
    StudentDemoComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule
  ]
})
export class StudentModule { }
