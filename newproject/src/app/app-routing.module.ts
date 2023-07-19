import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DirectivesinAngulerComponent } from './directivesin-anguler/directivesin-anguler.component';


const routes: Routes = [
  {path:'', component : LandingComponent},
  {path:'landing', component : LandingComponent},
  {path:'login',component : LoginComponent},
  {path:'sign-up',component :SignUpComponent},
  {path:'student',loadChildren:()=> import('./student/student.module').then (mod=>mod.StudentModule)},
  {path:'directives',component:DirectivesinAngulerComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
