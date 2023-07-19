import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DirectivesinAngulerComponent } from './directivesin-anguler/directivesin-anguler.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CharOnlyDirective } from './char-only.directive';

@NgModule({
  declarations: [//component directive, pipe
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignUpComponent,
    DirectivesinAngulerComponent,
    CharOnlyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
