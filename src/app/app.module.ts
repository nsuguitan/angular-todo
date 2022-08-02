import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MessageService} from 'primeng/api';
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import {PanelModule} from 'primeng/panel';
import {DataViewModule} from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import {ListboxModule} from 'primeng/listbox';

import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListService } from './todo-list/todo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    PanelModule,
    DataViewModule,
    TagModule,
    ListboxModule
    ],
  providers: [MessageService,TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
