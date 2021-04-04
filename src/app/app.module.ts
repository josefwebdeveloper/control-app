import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule} from './shared/material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DeseaseComponent } from './home/desease/desease.component';
import { SubDiseasComponent } from './home/desease/sub-diseas/sub-diseas.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeseaseComponent,
    SubDiseasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
