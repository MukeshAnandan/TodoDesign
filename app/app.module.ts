import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sidebar} from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { SubtaskComponent } from './subtask/subtask.component';

@NgModule({
  declarations: [
    AppComponent,
    Sidebar,
    HeaderComponent,
    TaskComponent,
    SubtaskComponent
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
