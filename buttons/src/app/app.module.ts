import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpandOnHoverWithTextComponent } from './expand-on-hover-with-text/expand-on-hover-with-text.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpandOnHoverWithTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
