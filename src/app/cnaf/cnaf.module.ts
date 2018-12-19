import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatPhonePipe } from './format-phone.pipe';
import { SwitchComponent } from './switch/switch.component';
import { NirValidatorDirective } from './nir-validator.directive';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [FormatPhonePipe, SwitchComponent, NirValidatorDirective, LoginComponent],
  imports: [
    CommonModule
  ],
  exports: [FormatPhonePipe, SwitchComponent, NirValidatorDirective, LoginComponent]
})
export class CnafModule { }
