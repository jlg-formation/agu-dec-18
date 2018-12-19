import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CnafModule } from 'projects/cnaf-utils/src/lib/cnaf/cnaf.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    CnafModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
