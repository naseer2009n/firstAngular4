import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { InlineHtmlComponent } from './inline-html/inline-html.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    InlineHtmlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
