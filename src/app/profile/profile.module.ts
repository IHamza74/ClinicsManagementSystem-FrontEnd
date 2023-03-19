import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { EmployeeProfileModule } from './employee-profile/employee-profile.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, FormsModule, EmployeeProfileModule],
})
export class ProfileModule {}
