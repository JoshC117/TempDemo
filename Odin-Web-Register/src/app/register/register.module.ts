import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module'
import { RegisterComponent } from './register.component';
import { RegisterBoxComponent } from './register-box/register-box.component'

@NgModule({
  declarations: [
      RegisterComponent,
      RegisterBoxComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})

export default class RegisterModule { }