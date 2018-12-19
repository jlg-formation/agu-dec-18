import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NirValidatorDirective } from './nir-validator.directive';
import { LoginComponent } from './login/login.component';
import { SwitchComponent } from './switch/switch.component';
import { FormatPhonePipe } from './format-phone.pipe';

@NgModule({
  declarations: [FormatPhonePipe, SwitchComponent, NirValidatorDirective, LoginComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [FormatPhonePipe, SwitchComponent, NirValidatorDirective, LoginComponent]
})
export class CnafModule { }
