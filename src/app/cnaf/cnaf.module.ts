import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatPhonePipe } from './format-phone.pipe';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [FormatPhonePipe, SwitchComponent],
  imports: [
    CommonModule
  ],
  exports: [FormatPhonePipe, SwitchComponent]
})
export class CnafModule { }
