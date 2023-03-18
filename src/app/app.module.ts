import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EmployeeListComponent } from './Modules/employee/employee-list/employee-list.component';
import { EmployeeModule } from './Modules/employee/employee.module';
import { PaginatorModule } from 'primeng/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ClinicModule } from '../app/Modules/clinic/clinic.module';
import { AppRoutingModule } from './app-routing.module';
import { MedicineModule } from './Modules/medicine/medicine.module';

//const routes: Routes = [{ path: 'Employee', component: EmployeeListComponent }];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    EmployeeModule,
    HttpClientModule,
    // RouterModule.forRoot(routes),
    PaginatorModule,
    BrowserAnimationsModule,
    MedicineModule,
    ClinicModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
