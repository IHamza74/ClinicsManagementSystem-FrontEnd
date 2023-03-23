import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DoctorModule } from './Modules/doctor/doctor.module';
import { DoctorService } from './Services/doctor.service';

import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './Modules/employee/employee-list/employee-list.component';
import { EmployeeModule } from './Modules/employee/employee.module';
import { PaginatorModule } from 'primeng/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ClinicModule } from '../app/Modules/clinic/clinic.module';
import { AppRoutingModule } from './app-routing.module';
import { MedicineModule } from './Modules/medicine/medicine.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InvoiceModule } from './Modules/invoice/invoice.module';
import { StripePaymentComponent } from './Modules/payment/stripe-payment/stripe-payment.component';

//const routes: Routes = [{ path: 'Employee', component: EmployeeListComponent }];

@NgModule({
  declarations: [AppComponent, StripePaymentComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    CoreModule,
    DoctorModule,
    ReactiveFormsModule,
    AccordionModule,
    FontAwesomeModule,
    EmployeeModule,
    // RouterModule.forRoot(routes),
    PaginatorModule,
    BrowserAnimationsModule,
    MedicineModule,
    ClinicModule,
    CommonModule,
    AppRoutingModule,
    InvoiceModule,
  ],
  providers: [DoctorService, InvoiceModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
