import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPageComponent } from './test-page/test-page.component';
import { TestPage2Component } from './test-page2/test-page2.component';


@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    TestPage2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
