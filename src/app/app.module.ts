import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from './sidebar/sidebar.module';
import { DivisionComponent } from './division/division.component';

@NgModule({
  declarations: [AppComponent, AdditionComponent, SubtractionComponent, DivisionComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SidebarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
