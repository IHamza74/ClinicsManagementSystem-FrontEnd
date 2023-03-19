import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeProfileCardComponent } from './employee-profile-card/employee-profile-card.component';

@NgModule({
  declarations: [EmployeeProfileCardComponent],
  imports: [CommonModule],
  exports: [EmployeeProfileCardComponent],
})
export class EmployeeProfileModule {}
