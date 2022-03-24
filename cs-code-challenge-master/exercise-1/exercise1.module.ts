import { observable } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{dataservices} from'./Dataservice';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; 
import{ FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DataViewModule,
    TableModule,
    PaginatorModule

   


  ],
  providers: [dataservices],
  bootstrap: [AppComponent]
})
export class ExerciseModule { }
