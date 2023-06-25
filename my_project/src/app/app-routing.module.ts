import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path : 'sign-up', component:SignUpComponent},
{path :'',component : HomeComponent},
{path : 'admin',loadChildren:()=> import ('./admin/admin.module').then (mod => mod.AdminModule)},
{path : 'parent', component:ParentComponent},
{path :'child', component : ChildComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
