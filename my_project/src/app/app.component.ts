import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_project';
  //propertyName :datatype = value/data;
  //testcase1
  firstName : string = 'savita';

  //testcase 2
  firstName1 = 'savita';
  firstName2! :string;
  surname2 :any;
  surName :any =true;
  formTitle : string ='Login Form..';
  studentName='sonali';
  amount= '6500';
  isFavCity = false;

  testingInterpolation( x :number, y :number){
    return x + y;
    }  }


