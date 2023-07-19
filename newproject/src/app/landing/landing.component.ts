import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(public router:Router)
  {
    
  }
  login()
  {
    this.router.navigateByUrl("/login")
  }
  signup()
  {
    this.router.navigateByUrl("/sign-up")
  }
  StudentActivity()
  {
    this.router.navigateByUrl('student/StudentActivity')

  }
  directives()
  {
    this.router.navigateByUrl('directives')
  }
  
    

}
