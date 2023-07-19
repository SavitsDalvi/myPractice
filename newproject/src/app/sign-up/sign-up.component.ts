import { Component } from '@angular/core';
import { FormGroup ,FormBuilder,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
signUpForm! :FormGroup;// property :DataType;e.g name: string;
  router: any;
constructor(public fb:FormBuilder){

}
ngOnInit(){
  this.signUpFormControlls();
}
signUpFormControlls()//form defination
{
  this.signUpForm =this.fb.group({//<-- is a method
    name:['',[Validators.required,Validators.pattern("[a-zA-Z ]*$"),Validators.minLength(10)]],
    email:[''],
    contact:['',[Validators.pattern("[0-9]"),Validators.minLength(10),Validators.maxLength(10)]],
    address:[''],
    gender:['Male']
  })
}
submit()
{
  console.log(this.signUpForm.value);
}


}
