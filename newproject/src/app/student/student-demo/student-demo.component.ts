import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-student-demo',
  templateUrl: './student-demo.component.html',
  styleUrls: ['./student-demo.component.css']
})
export class StudentDemoComponent {
  constructor(public router :Router){

  }
  back()
  {  this.router.navigateByUrl('landing');
  

  }

}
