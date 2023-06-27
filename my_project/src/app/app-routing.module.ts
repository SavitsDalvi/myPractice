import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path : 'login', component:LoginComponent},
  {path : 'sign-up', component:SignUpComponent},
{path :'',component : HomeComponent},
{path :'home', component:HomeComponent},
{path : 'admin',loadChildren:()=> import ('./admin/admin.module').then (mod => mod.AdminModule)},
{path : 'owner',loadChildren:()=> import ('./owner/owner.module').then (mod =>mod.OwnerModule)},
{path : 'user',
// path name any thing you want e.g'user'., loadChildren:()is callback method => function use this method for import ( /user(folder name)/user.module(module.ts) mod=>mod(UerModule is a class name from user.module.ts)
// {path : 'student',loadChildren:()=> import ('./student/student.module').then (mod.StudentModule)},
{path : 'parent', component:ParentComponent},
{path :'child', component : ChildComponent},
  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
