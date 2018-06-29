import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DoubleScrollModule } from 'mindgaze-doublescroll';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DoubleScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
