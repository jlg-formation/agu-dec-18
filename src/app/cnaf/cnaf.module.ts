import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatPhonePipe } from './format-phone.pipe';
import { SwitchComponent } from './switch/switch.component';
import { NirValidatorDirective } from './nir-validator.directive';

@NgModule({
  declarations: [FormatPhonePipe, SwitchComponent, NirValidatorDirective],
  imports: [
    CommonModule
  ],
  exports: [FormatPhonePipe, SwitchComponent, NirValidatorDirective]
})
export class CnafModule { }
