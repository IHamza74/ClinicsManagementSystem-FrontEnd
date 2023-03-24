import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { MatTabsModule } from '@angular/material/tabs';
import { ButtonModule } from 'primeng/button';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmPopupModule } from 'primeng/confirmpopup';


@NgModule({
  declarations: [
    AddAppointmentComponent,
  ],
  imports: [

CommonModule,ReactiveFormsModule,MatTabsModule,InputTextModule,BrowserModule,ConfirmPopupModule,
BrowserAnimationsModule,  TableModule,PaginatorModule,ButtonModule,MatButtonModule,MatFormFieldModule,MatSelectModule,
CalendarModule
],
exports:[TableModule,AddAppointmentComponent,PaginatorModule,]
})
export class AppointmentModule { }
