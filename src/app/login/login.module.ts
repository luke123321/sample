import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginComponentList, LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    loginComponentList
  ],
  providers: []
})
export class LoginModule { }
