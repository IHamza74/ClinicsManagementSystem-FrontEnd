import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeOptionsComponent } from './employee-list/employee-options/employee-options.component';
import { PaginatorModule } from 'primeng/paginator';
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeAddComponent,
    EmployeeOptionsComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, PaginatorModule, MegaMenuModule],
  exports: [EmployeeListComponent],
})
export class EmployeeModule {}
