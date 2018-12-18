import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CnafModule } from './cnaf/cnaf.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CnafModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
