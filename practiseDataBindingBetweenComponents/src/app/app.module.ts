import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlaveComponent } from './slave/slave.component';
import { SlaveSecondComponent } from './slave-second/slave-second.component';

@NgModule({
  declarations: [
    AppComponent,
    SlaveComponent,
    SlaveSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
