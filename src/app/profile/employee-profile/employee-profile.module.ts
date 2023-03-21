import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeProfileCardComponent } from './employee-profile-card/employee-profile-card.component';
import { EmployeeProfileEditComponent } from './employee-profile-edit/employee-profile-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeProfileCardComponent, EmployeeProfileEditComponent],
  imports: [CommonModule,ReactiveFormsModule],
  exports: [EmployeeProfileCardComponent,EmployeeProfileEditComponent],
})
export class EmployeeProfileModule {}
