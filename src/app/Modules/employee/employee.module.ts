import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeOptionsComponent } from './employee-list/employee-options/employee-options.component';
import { PaginatorModule } from 'primeng/paginator';
import { MegaMenuModule } from 'primeng/megamenu';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { MatTabsModule } from '@angular/material/tabs';
import { ButtonModule } from 'primeng/button';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeAddComponent,
    EmployeeOptionsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaginatorModule,
    MegaMenuModule,
    ConfirmPopupModule,
    ToastModule,
    MatTabsModule,
    ButtonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
  ],
  exports: [EmployeeListComponent],
})
export class EmployeeModule {}
